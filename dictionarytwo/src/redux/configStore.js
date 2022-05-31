import { createStore, combineReducers } from "redux";
import dictionary from "./modules/dictionary";
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = combineReducers({ dictionary });
// const rootReducer = combineReducers({ bucket, bucket22}); 이런식으로 여러개의 리듀서를 추가할수있음

const store = createStore(rootReducer, composeWithDevTools());

export default store;
