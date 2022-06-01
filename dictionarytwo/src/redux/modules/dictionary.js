import { db } from "../../firebase";
import {
  collection,
  doc,
  docRef, // 어떤걸 업데이트할거셈?
  getDoc,
  getDocs, // 데이터 가져오기
  addDoc, //데이터 추가
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Actions
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";
const UPDATE = "dictionary/UPDATE";
const COLORUPDATE = "dictionary/COLORUPDATE";
const REMOVE = "dictionary/REMOVE";
const currentState = { list: [] };

// Action Creators
export function loadDictionary(list) {
  return { type: LOAD, list };
}
export function addDictionary(dictionary) {
  return { type: CREATE, dictionary };
}
export function removeDictionary(dictionary_index) {
  return { type: REMOVE, dictionary_index };
}
//완료했을때 색상변경
export function updateColor(list, dictionary_id) {
  return { type: COLORUPDATE, list, dictionary_id };
}
//완료했을때 변경
export function updateDictionary(dictionary, dictionary_index) {
  return { type: UPDATE, dictionary, dictionary_index };
}

//미들웨어
//파라미터는 추가할 무언가를 받아오셈
//비동기 작업에는 async await 붙이셈
export const loadDictionaryFB = () => {
  return async function (dispatch) {
    const dic_data = await getDocs(collection(db, "list"));
    let list = [];
    dic_data.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
    });
    dispatch(loadDictionary(list));
  };
};

export const addDictionaryFB = (list) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "list"), { list });
    const dictionary = { id: docRef.id, ...list };
    dispatch(addDictionary(dictionary));
    console.log(dictionary.list);
  };
};

export const deleteDictionaryFB = (dictionary_id) => {
  return async function (dispatch, getState) {
    if (!dictionary_id) {
      window.alert("아이디가 없습니다.");
      return;
    }
    const docRef = doc(db, "list", dictionary_id);
    await deleteDoc(docRef);

    const _dictionary_list = getState().dictionary.list;
    const dictionary_index = _dictionary_list.findIndex((b) => {
      return b.id === dictionary_id;
    });
    dispatch(removeDictionary(dictionary_index));
  };
};

// 암기/미암기 토글 함수
export const updateColorFB = (list, dictionary_id) => {
  return async function (dispatch) {
    const docRef = doc(db, "list", dictionary_id);
    console.log(list.completed);
    await updateDoc(docRef, { ...list, completed: !list.completed });
    dispatch(updateColor(dictionary_id));
  };
};

export const updateDictionaryFB = (dictionary, dictionary_index) => {
  return async function (dispatch) {
    console.log(dictionary);
    const docRef = doc(db, "list", dictionary_index);
    await updateDoc(docRef, { ...dictionary, dictionary_index });

    // const newState = db.list.map((l, idx) => {
    //   if (parseInt(dictionary_index) === idx) {
    //     return { ...l, ...dictionary };
    //   } else {
    //     return l;
    //   }
    // });
    // const new_dictionary = { ...dictionary, dictionary_id };
    dispatch(updateDictionary(dictionary, dictionary_index));
  };
};

// reducer는 두개를 받는다 현재State값, action(어떻게 바꿀것인지.)
export default function reducer2(state = currentState, action = {}) {
  switch (action.type) {
    case "dictionary/LOAD": {
      return { list: action.list };
    }
    // case "dictionary/ADD"
    case "dictionary/CREATE": {
      const newState = [...state.list, action.dictionary];
      // return { ...state, list: newState };
      return { ...state, newState };
    }

    case "dictionary/REMOVE": {
      const newState = state.list.filter((l, idx) => {
        return parseInt(action.dictionary_index) !== idx;
        // return parseInt(action.dictionary_index)
      });
      return { list: newState };
    }
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

    case "dictionary/COLORUPDATE": {
      const new_dictionary_list = state.list.map((l) =>
        l.id === action.dictionary_id ? { ...l, completed: !l.completed } : l
      );
      return { ...state, list: new_dictionary_list };
    }
    default:
      return state;
  }
}
// import { db } from "../../firebase";
// import {
//   collection,
//   doc,
//   docRef, // 어떤걸 업데이트할거셈?
//   getDoc,
//   getDocs, // 데이터 가져오기
//   addDoc, //데이터 추가
//   updateDoc,
//   deleteDoc,
// } from "firebase/firestore";
// import { async } from "@firebase/util";
// // widgets.js

// // Actions
// const LOAD = "dictionary/LOAD";
// const CREATE = "dictionary/CREATE";
// const UPDATE = "dictionary/UPDATE";
// const TRUEUPDATE = "dictionary/TRUEUPDATE";
// const REMOVE = "dictionary/REMOVE";
// const currentState = {
//   list: [
//     // {
//     //   id: 1,
//     //   title: "사과",
//     //   mean: "나무의 열매.",
//     //   comment: "사과가 되지 말고 도마도가 되라",
//     //   completed: false,
//     // },
//     // {
//     //   id: 2,
//     //   title: "바나나",
//     //   mean: "나무의 열매.",
//     //   comment: "사과가 되지 말고 도마도가 되라",
//     //   completed: false,
//     // },
//     // {
//     //   id: 3,
//     //   title: "배",
//     //   mean: "나무의 열매.",
//     //   comment: "사과가 되지 말고 도마도가 되라",
//     //   completed: false,
//     // },
//   ],
// };
// // Action Creators
// export function loadDictionary(list) {
//   return { type: LOAD, list };
// }
// export function createDictionary(dictionary) {
//   return { type: CREATE, dictionary };
// }
// export function updateDictionary(list, dictionary_id) {
//   return { type: UPDATE, list, dictionary_id };
// }
// export function removeDictionary(dictionary_index) {
//   return { type: REMOVE, dictionary_index };
// }
// // //글내용수정
// // export function updateDictionary(dictionary, dictionary_index) {
// //   return { type: UPDATE, dictionary, dictionary_index };
// // }
// //완료했을때 색상변경
// export function TrueUpdateDictionary(dictionary_index) {
//   return { type: TRUEUPDATE, dictionary_index };
// }

// //미들웨어
// //파라미터는 추가할 무언가를 받아오셈
// //비동기 작업에는 async await 붙이셈
// export const loadDictionaryFB = () => {
//   return async function (dispatch) {
//     const dic_data = await getDocs(collection(db, "list"));
//     // console.log(dic_data);
//     let list = [];
//     dic_data.forEach((doc) => {
//       // console.log(doc.data());
//       list.push({ id: doc.id, ...doc.data() });
//       // dictionary_list = [...dictionary_list, { ...doc.data() }];
//     });
//     // console.log(list);
//     dispatch(loadDictionary(list));
//   };
// };

// export const addDictionaryFB = (list) => {
//   return async function (dispatch) {
//     // let dictionary = [];
//     const docRef = await addDoc(collection(db, "list"), { list });
//     // const _dictionary = await getDoc(docRef);
//     // dictionary.push({ id: _dictionary.id, ..._dictionary.data() });
//     const dictionary = { id: docRef.id, ...list };
//     dispatch(createDictionary(dictionary));
//     console.log(dictionary.list);
//   };
// };

// export const TrueUpdateDictionaryFB = (dictionary_id) => {
//   return async function (dispatch, getState) {
//     const docRef = doc(db, "list", dictionary_id);
//     await updateDoc(docRef, { list: { completed: true } });

//     console.log(getState().dictionary);
//     const _dictionary_list = getState().dictionary.list;
//     const dictionary_index = _dictionary_list.findIndex((b) => {
//       return b.id === dictionary_id;
//     });
//     dispatch(TrueUpdateDictionary(dictionary_index));
//   };
// };

// export const deleteDictionaryFB = (dictionary_id) => {
//   return async function (dispatch, getState) {
//     if (!dictionary_id) {
//       window.alert("아이디가 없습니다.");
//       return;
//     }
//     const docRef = doc(db, "list", dictionary_id);
//     await deleteDoc(docRef);

//     const _dictionary_list = getState().dictionary.list;
//     const dictionary_index = _dictionary_list.findIndex((b) => {
//       return b.id === dictionary_id;
//     });
//     dispatch(removeDictionary(dictionary_index));
//   };
// };

// export const updateDictionaryFB = (list, dictionary_id) => {
//   return async function (dispatch) {
//     const docRef = await doc(collection(db, "list", dictionary_id));
//     updateDoc(docRef, { completed: true });
//     // const dictionary = { id: docRef.id, ...list };
//     // dispatch(createDictionary(dictionary));
//     console.log(docRef);
//   };
// };

// // reducer는 두개를 받는다 현재State값, action(어떻게 바꿀것인지.)
// export default function reducer2(state = currentState, action = {}) {
//   switch (action.type) {
//     case "dictionary/LOAD": {
//       return { list: action.list };
//     }
//     // case "dictionary/ADD"
//     case "dictionary/CREATE": {
//       const newState = [...state.list, action.dictionary];
//       // return { ...state, list: newState };
//       return { list: newState };
//     }

//     case "dictionary/REMOVE": {
//       const newState = state.list.filter((l, idx) => {
//         return parseInt(action.dictionary_index) !== idx;
//         // return parseInt(action.dictionary_index)
//       });
//       return { list: newState };
//     }

//     case "dictionary/UPDATE": {
//       const newState = state.list.map((l, idx) => {
//         if (l.id === action.l.id) {
//           return { ...l, ...action.dictionary };
//         } else {
//           return l;
//         }
//       });
//       return { ...state, list: newState };
//     }

//     case "dictionary/TRUEUPDATE": {
//       const newState = state.list.map((l, idx) => {
//         if (parseInt(action.dictionary_index) === idx) {
//           return { ...l, completed: true };
//         } else {
//           return l;
//         }
//       });
//       return { list: newState };
//     }
//     default:
//       return state;
//   }
// }

// //만약 커런트 스테이트가 정의되지 않았다면
// // const [nextId, setNextId] = useState(4);
// //   //reducer는 각각의 스테이트를 불변하게 유지해야하는데 그방법은
// //   // 새로운 State를 만드는데 현재스테이트를 복제한다.
// //   const newState = { ...currentState };
// //   //action type이 플러스면 뉴스테이트의 넘버를 ++해준다.
// //   if (action.type === "PLUS") {
// //     console.log("aaa");
// //     // <Write
// //     //   onCreate={(title) => {
// //     //     console.log(title);
// //     //   }}
// //     // ></Write>;
// //   }
// //   return newState;
// // }

// // side effects, only as applicable
// // e.g. thunks, epics, etc
// // export function getWidget() {
// //   return (dispatch) =>
// //     get("/widget").then((widget) => dispatch(updateWidget(widget)));
// // }

// // Reducer
// // export default function reducer(state = initialState, action = {}) {
// //   switch (action.type) {
// //     case "bucket/CREATE": {
// //       const new_bucket_list = [...state.list, action.bucket];
// //       return { list: new_bucket_list };
// //     }
// //     default:
// //       return state;
// //   }
// // }
// // case "dictionary/UPDATE":
// //   let modified_words = state.word_list.map((word) =>
// //     word.id === action.word.id ? { ...word, ...action.word } : word
// //   );
// //   return {
// //     ...state,
// //     word_list: modified_words,
// //   };
