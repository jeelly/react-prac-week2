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
          <Iteminner>
            {/* <Link id={t.id} to={"card" + t.id}> */}
            <Title>{item?.title}</Title>
            <Mean>({item?.mean})</Mean>
            <Comment>{item?.comment}</Comment>
          </Iteminner>
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
var colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
var colorCode2 = "#" + Math.round(Math.random() * 0xffffff).toString(16);

// console.log(colorCode);
const Title = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #e7e9e9;
`;
const Mean = styled.p`
  color: #d2d2d2;
  font-size: 20px;
  font-weight: lighter;
  margin-bottom: 18px;
`;

const Comment = styled.p`
  /* font-weight: lighter; */
  font-size: 26px;
  color: #a4fff1;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin: 0px 5px 10px 5px;
  /* border: 1px solid ${colorCode2}; */
  /* border-radius: ${(props) => (props.completed ? "5px" : "0px")}; */
  background-color: ${(props) => (props.completed ? colorCode : "transparent")};
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
    transform: rotate(5deg);
  }
`;
const Iteminner = styled.div`
  width: 180px;
  height: 180px;
  padding: 10px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  transition: width 0.5s, height 0.5s, background-color 0.5s;
  &:hover {
    width: 200px;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.9);
  }
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
  padding: 2% 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 80vw;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`;
