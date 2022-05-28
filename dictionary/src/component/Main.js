import React from "react";
import { useState } from "react";
import "../Main.css";
// styled componets
import styled from "styled-components";
import { Link } from "react-router-dom";
//react-redux
import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

//세부 페이지
import ListPage from "./ListPage";
import Write from "./Write";

// reducer는 두개를 받는다 현재State값, action(어떻게 바꿀것인지.)
function reducer(currentState, action) {
  //만약 커런트 스테이트가 정의되지 않았다면
  if (currentState === undefined) {
    return [
      {
        id: 1,
        title: "사과",
        mean: "나무의 열매.",
        comment: "사과가 되지 말고 도마도가 되라",
      },
      {
        id: 2,
        title: "바나나",
        mean: "나무의 열매.",
        comment: "사과가 되지 말고 도마도가 되라",
      },
      {
        id: 3,
        title: "배",
        mean: "나무의 열매.",
        comment: "사과가 되지 말고 도마도가 되라",
      },
    ];
  }
  //reducer는 각각의 스테이트를 불변하게 유지해야하는데 그방법은
  // 새로운 State를 만드는데 현재스테이트를 복제한다.
  const newState = { ...currentState };
  return newState;
}
const store = createStore(reducer);

export default function App() {
  return (
    <>
      <Link to="write">write</Link>
      <Provider store={store}>
        <ListPage />
      </Provider>
    </>
  );
}
