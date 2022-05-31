// widgets.js

// Actions
const CREATE = "dictionary/CREATE";
const UPDATE = "dictionary/UPDATE";
const TRUEUPDATE = "dictionary/TRUEUPDATE";
const REMOVE = "dictionary/REMOVE";
const currentState = {
  list: [
    {
      id: 1,
      title: "사과",
      mean: "나무의 열매.",
      comment: "사과가 되지 말고 도마도가 되라",
      completed: false,
    },
    {
      id: 2,
      title: "바나나",
      mean: "나무의 열매.",
      comment: "사과가 되지 말고 도마도가 되라",
      completed: false,
    },
    {
      id: 3,
      title: "배",
      mean: "나무의 열매.",
      comment: "사과가 되지 말고 도마도가 되라",
      completed: false,
    },
  ],
};
// Action Creators
export function createDictionary(dictionary) {
  return { type: CREATE, dictionary };
}
export function removeDictionary(dictionary_index) {
  return { type: REMOVE, dictionary_index };
}

//글내용수정
export function updateDictionary(dictionary, dictionary_index) {
  return { type: UPDATE, dictionary, dictionary_index };
}
//완료했을때 색상변경
export function TrueUpdateDictionary(dictionary_index) {
  return { type: TRUEUPDATE, dictionary_index };
}
// reducer는 두개를 받는다 현재State값, action(어떻게 바꿀것인지.)
export default function reducer2(state = currentState, action = {}) {
  switch (action.type) {
    case "dictionary/CREATE": {
      const newState = [...currentState.list, action.dictionary];
      // console.log(action.dictionary);
      return { ...currentState, list: newState };
    }

    case "dictionary/REMOVE": {
      const newState = state.list.filter((l, idx) => {
        return parseInt(action.dictionary_index) !== idx;
        // return parseInt(action.dictionary_index)
      });
      return { list: newState };
    }

    //word.id === action.word.id ? { ...word, ...action.word } : word
    case "dictionary/UPDATE": {
      const newState = state.list.map((l, idx) => {
        if (parseInt(action.dictionary_index) === idx) {
          return { ...l, ...action.dictionary };
        } else {
          return l;
        }
      });
      return { list: newState };
    }
    case "dictionary/TRUEUPDATE": {
      const newState = state.list.map((l, idx) => {
        if (parseInt(action.dictionary_index) === idx) {
          return { ...l, completed: true };
        } else {
          return l;
        }
      });
      return { list: newState };
    }
    default:
      return state;
  }
}

//만약 커런트 스테이트가 정의되지 않았다면
// const [nextId, setNextId] = useState(4);
//   //reducer는 각각의 스테이트를 불변하게 유지해야하는데 그방법은
//   // 새로운 State를 만드는데 현재스테이트를 복제한다.
//   const newState = { ...currentState };
//   //action type이 플러스면 뉴스테이트의 넘버를 ++해준다.
//   if (action.type === "PLUS") {
//     console.log("aaa");
//     // <Write
//     //   onCreate={(title) => {
//     //     console.log(title);
//     //   }}
//     // ></Write>;
//   }
//   return newState;
// }

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//   return (dispatch) =>
//     get("/widget").then((widget) => dispatch(updateWidget(widget)));
// }

// Reducer
// export default function reducer(state = initialState, action = {}) {
//   switch (action.type) {
//     case "bucket/CREATE": {
//       const new_bucket_list = [...state.list, action.bucket];
//       return { list: new_bucket_list };
//     }
//     default:
//       return state;
//   }
// }
// case "dictionary/UPDATE":
//   let modified_words = state.word_list.map((word) =>
//     word.id === action.word.id ? { ...word, ...action.word } : word
//   );
//   return {
//     ...state,
//     word_list: modified_words,
//   };
