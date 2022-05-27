import React from "react";

// styled componets
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Provider, useSelector, useDispatch, connect } from "react-redux";

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

export default function ListPage(props) {
  return (
    <>
      <Nav />
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
