import React, { useEffect } from "react";
import { useState } from "react";

// styled componets
import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

import { Provider, useSelector, useDispatch, connect } from "react-redux";

import { loadDictionaryFB, updateColorFB } from "../redux/modules/dictionary";

let Nav = (props) => {
  // 암기/미암기 상태를 toggle 하는 함수
  const toggleCheck = (word) => {
    dispatch(updateColorFB(word));
  };

  const dispatch = useDispatch();

  // LOAD
  React.useEffect(() => {
    dispatch(loadDictionaryFB());
  }, []);
  const topics = useSelector((list) => list.dictionary.list);
  const items = topics.map((item, index) => {
    return (
      <Link key={index} id={index} to={`/card/${parseInt(index)}`}>
        <Item completed={item?.completed} key={index}>
          {/* <Link id={t.id} to={"card" + t.id}> */}

          <p>{item.list?.title}</p>
          {/* <p>{item?.list?.mean}</p> */}
          <Comment>{item.list?.comment}</Comment>
        </Item>
      </Link>
    );
  });
  return <List>{items}</List>;
};

export default function ListPage() {
  return (
    <>
      <Nav />
      {/* <Card></Card> */}
    </>
  );
}

const Item = styled.li`
  text-align: center;
  border-bottom: 1px solid rosybrown;
  width: 300px;
  padding: 10px 0;
  margin-bottom: 30px;
  border-radius: ${(props) => (props.completed ? "5px" : "0px")};

  background-color: ${(props) =>
    props.completed ? "rosybrown" : "transparent"};
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
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  /* justify-content: space-evenly; */
  width: 80vw;
  margin: 0 auto;

  /* overflow-x: hidden;
  overflow-y: hidden;
  max-height: 50vh; */
`;
const Comment = styled.p`
  color: skyblue;
`;
