// widgets.js

// Actions
// const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
// const UPDATE = "my-app/widgets/UPDATE";
const REMOVE = "bucket/REMOVE";
const initialState = {
  list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
};

// Action Creators
export function createBucket(bucket) {
  return { type: CREATE, bucket };
}
export function removeBucket(bucket_index) {
  // console.log("지울버킷", bucket_index);
  return { type: REMOVE, bucket_index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }
    case "bucket/REMOVE": {
      // console.log(state, action);
      const new_bucket_list = state.list.filter((l, idx) => {
        console.log(
          Number(action.bucket_index) !== idx,
          Number(action.bucket_index),
          idx
        );
        return parseInt(action.bucket_index) !== idx;
        // return new_state;
      });
      console.log(new_bucket_list);
      return { list: new_bucket_list };
    }
    default:
      return state;
  }
}

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//   return (dispatch) =>
//     get("/widget").then((widget) => dispatch(updateWidget(widget)));
// }
