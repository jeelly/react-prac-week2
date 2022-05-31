import { createStore, combineReducers, applyMiddleware, compose } from "redux";
//thunk
import thunk from "redux-thunk";
import dictionary from "./modules/dictionary";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk]; // 미들웨어 넣어줌
const enhancer = applyMiddleware(...middlewares); // 미들웨어를 묶어서 넣어줌
// const devtools = composeWithDevTools();
const rootReducer = combineReducers({ dictionary });
// const rootReducer = combineReducers({ bucket, bucket22}); 이런식으로 여러개의 리듀서를 추가할수있음

const store = createStore(rootReducer, enhancer);

export default store;
