import React, { useEffect } from "react";
import { useState } from "react";

// styled componets
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Provider, useSelector, useDispatch, connect } from "react-redux";

//파이어베이스

import { db } from "../firebase"; //
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore"; //
import { loadDictionaryFB } from "../redux/modules/dictionary"; //

let Nav = (props) => {
  const dispatch = useDispatch(); //

  // LOAD
  React.useEffect(() => {
    dispatch(loadDictionaryFB());
  }, []);
  const topics = useSelector((list) => list.dictionary.list);
  // console.log(topics);
  // const topics = useSelector((state) => state.dictionary.list);
  const items = topics.map((item, index) => {
    return (
      <Link id={index} to={`/card/${parseInt(index)}`}>
        <Item completed={item.list?.completed} key={index}>
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
