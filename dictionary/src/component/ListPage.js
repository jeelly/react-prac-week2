import React from "react";
import { useState } from "react";

// styled componets
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Provider, useSelector, useDispatch, connect } from "react-redux";

let Nav = (props) => {
  const item = [];
  const topics = useSelector((state) => state);
  for (let i = 0; i < topics.length; i++) {
    let t = topics[i];
    // console;
    item.push(
      <Item key={t.id}>
        {/* <Link id={t.id} to={"read" + t.id}>
          {t.title}
        </Link> */}
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {t.title}
        </a>
        {/* <p>{t.mean}</p> */}
        {/* <p>{t.comment}</p> */}
      </Item>
    );
  }
  return <List>{item}</List>;
};

export default function ListPage() {
  let content = null;

  //리덕스
  const topics = useSelector((state) => state);
  //모드 생성
  const [mode, setMode] = useState("MAIN");
  //아이디 생성
  const [id, setId] = useState(null);

  if (mode === "MAIN") {
    content = <article>메인페이지입니다.</article>;
  } else if (mode === "READ") {
    let title,
      mean,
      comment = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        mean = topics[i].mean;
        comment = topics[i].comment;
      }
    }
    content = (
      <SelectItem>
        <p>{title}</p>
        <p>{mean}</p>
        <p>{comment}</p>
      </SelectItem>
    );
  }

  return (
    <>
      {content}
      <Nav
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      />
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

const SelectItem = styled.li`
  margin: 0 auto;
  text-align: center;
  border: 2px solid rosybrown;
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
