import React from "react";

// styled componets
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Provider, useSelector, useDispatch, connect } from "react-redux";

let Nav = () => {
  const item = [];
  const topics = useSelector((state) => state);
  for (let i = 0; i < topics.length; i++) {
    let t = topics[i];
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

export default function ListPage() {
  // const topics = useSelector((state) => state);
  // console.log(topics);
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
