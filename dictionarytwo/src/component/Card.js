import React from "react";
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../Main.css";

// styled componets
import styled from "styled-components";
//router
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  removeDictionary,
  TrueUpdateDictionary,
} from "../redux/modules/dictionary";
export default function Card({ match }) {
  //라우트
  let navigate = useNavigate();
  // function handleClick() {
  //   navigate("/");
  // }
  //리덕스
  const topics = useSelector((state) => state);
  const dispatch = useDispatch();
  // parmas
  const { _id } = useParams();
  const dictionary_index = _id;

  const cards = topics.dictionary.list[_id];

  const DelDictionary = () => {
    dispatch(removeDictionary(dictionary_index));
  };
  const TrueUpdate = () => {
    dispatch(TrueUpdateDictionary(dictionary_index));
  };
  // console.log(dictionary_index);
  // console.log(_id, cards);
  return (
    <>
      <ul key={Number(_id)}>
        <li>{cards?.title}</li>
        <li>{cards?.mean}</li>
        <li>{cards?.comment}</li>
      </ul>
      <button
        onClick={() => {
          TrueUpdate();
          navigate(-1);
        }}
      >
        완료
      </button>
      <button>
        <Link id={_id} to={`/update/${_id}`}>
          수정
        </Link>
      </button>
      <button
        onClick={() => {
          DelDictionary();
          navigate(-1);
        }}
      >
        삭제
      </button>
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
