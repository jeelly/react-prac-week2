import { createStore, combineReducers } from "redux";
import bucket from "./modules/bucket";

const rootReducer = combineReducers({ bucket });
// const rootReducer = combineReducers({ bucket:bucket }); // 4번코드랑 같은 뜻
// const rootReducer = combineReducers({ bucket, bucket22}); 이런식으로 여러개의 리듀서를 추가할수있음

const store = createStore(rootReducer);
// const store = createStore(reducer);
export default store;
