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

// reducer는 두개를 받는다 현재State값, action(어떻게 바꿀것인지.)
function reducer(currentState, action) {
  //만약 커런트 스테이트가 정의되지 않았다면
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }
  //reducer는 각각의 스테이트를 불변하게 유지해야하는데 그방법은
  // 새로운 State를 만드는데 현재스테이트를 복제한다.
  const newState = { ...currentState };

  return newState;
}

const store = createStore(reducer);

let Nav = (props) => {
  const item = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    // console;
    item.push(
      <Item key={t.id}>
        <Link id={t.id} to={"read" + t.id}>
          {t.title}
        </Link>
        <p>{t.mean}</p>
        <p>{t.comment}</p>
      </Item>
    );
  }
  return <List>{item}</List>;
};

export default function App() {
  const [number, setNumber] = useState(1);
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: "사과",
      mean: "나무의 열매.",
      comment:
        "사과가 되지 말고 도마도가 되라 북한어 사과처럼 겉만 붉고 속은 흰 사람이 되지 말고 토마토처럼 겉과 속이 같은 견실한 사람이 되라는 말.",
    },
    {
      id: 2,
      title: "바나나",
      mean: "나무의 열매.",
      comment:
        "사과가 되지 말고 도마도가 되라 북한어 사과처럼 겉만 붉고 속은 흰 사람이 되지 말고 토마토처럼 겉과 속이 같은 견실한 사람이 되라는 말.",
    },
    {
      id: 3,
      title: "배",
      mean: "나무의 열매.",
      comment:
        "사과가 되지 말고 도마도가 되라 북한어 사과처럼 겉만 붉고 속은 흰 사람이 되지 말고 토마토처럼 겉과 속이 같은 견실한 사람이 되라는 말.",
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <Nav topics={topics} />
        <ListPage topics={topics} />
      </Provider>
    </>
  );
}

const Item = styled.li`
  text-align: center;
  border: 1px solid rosybrown;
  width: 300px;
  padding: 50px;
  margin-bottom: 30px;
`;

const List = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80vw;
  margin: 0 auto;
`;
