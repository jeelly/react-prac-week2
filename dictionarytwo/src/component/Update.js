import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Main.css";

// styled componets
import styled from "styled-components";
//router
//redux
import { useSelector, useDispatch } from "react-redux";
import { updateDictionary } from "../redux/modules/dictionary";
export default function Update({ match }) {
  //라우트
  let navigate = useNavigate();
  //리덕스
  const topics = useSelector((state) => state);
  const dispatch = useDispatch();
  // parmas
  const { _id } = useParams();
  const dictionary_index = _id;

  const cards = topics.dictionary.list[_id];

  const text = React.useRef(null);
  const text2 = React.useRef(null);
  const text3 = React.useRef(null);

  const getFormData = () => {
    const title = text.current.value.trim();
    const mean = text2.current.value.trim();
    const comment = text3.current.value.trim();

    // 유효성 체크
    // if (!title || !mean || !comment) {
    //   alert("아직 입력하지 않은 항목이 있습니다.");
    //   return false;
    // }
  };

  // 단어를 수정하는 함수
  const upDictionary = () => {
    // const word_obj = getFormData();
    // if (!word_obj) return;
    dispatch(
      updateDictionary(
        {
          title: text.current.value,
          mean: text2.current.value,
          comment: text3.current.value,
          completed: false,
        },
        dictionary_index
      )
    );
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault(); // 새로고침을 안한다는 명령어
        }}
      >
        <p>
          <input
            type="text"
            ref={text}
            name="title"
            defaultValue={cards.title}
          />
        </p>
        <p>
          <input
            name="mean"
            ref={text2}
            type="text"
            defaultValue={cards.mean}
          />
        </p>
        <p>
          <input
            type="text"
            ref={text3}
            name="comment"
            defaultValue={cards.comment}
          />
        </p>
        <p>
          <input
            type="submit"
            value="수정완료"
            onClick={() => {
              upDictionary();
              navigate(-1);
            }}
          />
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            취소
          </button>
        </p>
      </form>
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
