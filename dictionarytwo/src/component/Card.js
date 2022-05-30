import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../Main.css";

// styled componets
import styled from "styled-components";
//router
import { Link, useNavigate } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { removeDictionary } from "../redux/modules/dictionary";
export default function Card({ match }) {
  //리덕스
  const topics = useSelector((state) => state);
  const dispatch = useDispatch();
  // parmas
  const { _id } = useParams();
  const dictionary_index = _id;

  const cards = topics.dictionary[_id];

  const DelDictionary = () => {
    dispatch(removeDictionary(dictionary_index));
  };
  console.log(dictionary_index);
  console.log(_id, cards);
  return (
    <>
      <ul key={Number(_id)}>
        <li>{cards.title}</li>
        <li>{cards.mean}</li>
        <li>{cards.comment}</li>
      </ul>
      <button onClick={DelDictionary}>삭제하기</button>
    </>
  );

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
}
