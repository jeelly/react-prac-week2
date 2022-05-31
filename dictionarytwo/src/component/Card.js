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

  const DelDictionary = () => {
    dispatch(removeDictionary(dictionary_index));
  };

  // LOAD
  React.useEffect(() => {
    dispatch(loadDictionaryFB());
  }, []);

  const topics = useSelector((list) => list.dictionary.list);
  // console.log(topics[_id]);
  // let cards = topics[_id];
  const cards = topics[_id];

  return (
    <>
      <ul key={Number(_id)}>
        <li>{cards?.list.title}</li>
        <li>{cards?.list.mean}</li>
        <li>{cards?.list.comment}</li>
      </ul>
      <button
        onClick={() => {
          // TrueUpdate();
          dispatch(TrueUpdateDictionaryFB(topics[_id].id));
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
          dispatch(deleteDictionaryFB(topics[_id].id));
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
