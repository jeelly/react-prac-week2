import React from "react";
import { useState } from "react";

// styled componets
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Provider, useSelector, useDispatch, connect } from "react-redux";

let Nav = (props) => {
  // const item = [];
  const topics = useSelector((state) => state.dictionary);
  // console.log(topics);
  // for (let i = 0; i < topics.length; i++) {
  // let t = topics[i];
  // console;
  //   item.push(
  //     <Item key={t.id}>
  //       {/* <Link id={t.id} to={"card" + t.id}> */}
  //       <Link id={t.id} to={`/card/${parseInt(t.id)}`}>
  //         {t.title}
  //       </Link>
  //       <p>{t.mean}</p>
  //       <p>{t.comment}</p>
  //     </Item>
  //   );
  // }
  const items = topics.map((item, index) => {
    return (
      <Item key={index}>
        {/* <Link id={t.id} to={"card" + t.id}> */}
        <Link id={index} to={`/card/${parseInt(index)}`}>
          {item.title}
        </Link>
        <p>{item.mean}</p>
        <p>{item.comment}</p>
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
