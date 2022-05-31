import React from "react";
import { useState } from "react";

// styled componets
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Provider, useSelector, useDispatch, connect } from "react-redux";

let Nav = (props) => {
  const topics = useSelector((state) => state.dictionary.list);
  console.log(topics);
  const items = topics.map((item, index) => {
    return (
      <Item completed={item.completed} key={index}>
        {/* <Link id={t.id} to={"card" + t.id}> */}
        <Link id={index} to={`/card/${parseInt(index)}`}>
          {item.title}
        </Link>
        <p>{item.mean}</p>
        <Comment>{item.comment}</Comment>
      </Item>
    );
  });
  return <List>{items}</List>;
};

export default function ListPage() {
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
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80vw;
  margin: 0 auto;

  /* overflow-x: hidden;
  overflow-y: hidden;
  max-height: 50vh; */
`;
const Comment = styled.p`
  color: skyblue;
`;
