import { createStore, combineReducers } from "redux";
import dictionary from "./modules/dictionary";

const rootReducer = combineReducers({ dictionary });
// const rootReducer = combineReducers({ bucket, bucket22}); 이런식으로 여러개의 리듀서를 추가할수있음

const store = createStore(rootReducer);

export default store;
