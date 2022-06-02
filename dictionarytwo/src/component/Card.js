import React from "react";
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../Main.css";

// styled componets
import styled from "styled-components";
//router
//redux
import { useSelector, useDispatch, createDispatchHook } from "react-redux";
import {
  removeDictionary,
  TrueUpdateDictionary,
  TrueUpdateDictionaryFB,
  deleteDictionaryFB,
  updateColorFB,
} from "../redux/modules/dictionary";

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
export default function Card({ match }) {
  //라우트
  let navigate = useNavigate();
  // function handleClick() {
  //   navigate("/");
  // }
  //리덕스
  // const topics = useSelector((state) => state);
  const dispatch = useDispatch();
  // parmas
  const { _id } = useParams();
  const dictionary_index = _id;

  // const DelDictionary = () => {
  //   dispatch(removeDictionary(dictionary_index));
  // };

  // LOAD
  React.useEffect(() => {
    dispatch(loadDictionaryFB());
  }, []);

  const topics = useSelector((list) => list.dictionary.list);
  // console.log(topics[_id]);
  // let cards = topics[_id];
  const cards = topics[_id];
  console.log(cards);
  return (
    <>
      <Ul key={Number(_id)}>
        <Li>
          <Title>Title</Title>
          {cards?.title}
        </Li>
        <Li>
          <Title>Mean</Title>
          {cards?.mean}
        </Li>
        <Li>
          <Title>Comment</Title>
          {cards?.comment}
        </Li>
      </Ul>
      <ButtonInner>
        <Btn
          onClick={() => {
            // toggleCheck();
            dispatch(updateColorFB(cards, cards.id));
            // dispatch(TrueUpdateDictionaryFB(topics[_id].id));
            navigate(-1);
          }}
        >
          Complete
        </Btn>
        <Btn>
          <StyledLink id={_id} to={`/update/${_id}`}>
            Modify
          </StyledLink>
        </Btn>
        <Btn
          onClick={() => {
            dispatch(deleteDictionaryFB(topics[_id].id));
            navigate(-1);
          }}
        >
          Delete
        </Btn>
      </ButtonInner>
    </>
  );
}

const StyledLink = styled(Link)`
  color: white;
`;

const ButtonInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 100vw;
`;

const Btn = styled.button`
  width: 200px;
  height: 50px;
  color: white;
  padding: 10px 0;
  text-align: center;
  /* font-weight: bold; */
  font-size: 24px;
  margin: 0px 2px;
  border-radius: 5px;
  border: none;
  background-color: #2467dc;
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: rgba(36, 103, 220, 0.5);
  }
`;
const Title = styled.li`
  font-weight: bold;
  color: #2467dc;
  font-size: 28px;
`;
const Ul = styled.ul`
  padding: 0;
`;
const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 34px;
`;
// const cards = topics.dictionary[_id - 1];
// // filter
// const card = topics.dictionary.filter(
//   (topic) => topic.id === Number(cards.id)
// );

// const dic_card = card.map((cards) => (
//   <ul key={cards.id}>
//     <li>{cards.title}</li>
//     <li>{cards.mean}</li>
//     <li>{cards.comment}</li>
//   </ul>
// ));
// return <>{dic_card}</>;
