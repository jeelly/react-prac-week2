// widgets.js

// Actions
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";
// const UPDATE = "my-app/widgets/UPDATE";
const REMOVE = "dictionary/REMOVE";
// const initialState = {
//   list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
// };

const currentState = [
  {
    // id: 1,
    title: "사과",
    mean: "나무의 열매.",
    comment: "사과가 되지 말고 도마도가 되라",
  },
  {
    // id: 2,
    title: "바나나",
    mean: "나무의 열매.",
    comment: "사과가 되지 말고 도마도가 되라",
  },
  {
    // id: 3,
    title: "배",
    mean: "나무의 열매.",
    comment: "사과가 되지 말고 도마도가 되라",
  },
];
// Action Creators
export function createDictionary(dictionary) {
  return { type: CREATE, dictionary };
}
export function removeDictionary(dictionary_index) {
  return { type: REMOVE, dictionary_index };
}

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

// reducer는 두개를 받는다 현재State값, action(어떻게 바꿀것인지.)
export default function reducer2(state = currentState, action = {}) {
  switch (action.type) {
    case "dictionary/CREATE": {
      const newState = [...currentState, action.dictionary];
      // return { list: newState };
      return newState;
    }
    case "dictionary/REMOVE": {
      const newState = state.filter((l, idx) => {
        return parseInt(action.dictionary_index) !== idx;
        // return parseInt(action.dictionary_index)
      });
      return newState;
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
