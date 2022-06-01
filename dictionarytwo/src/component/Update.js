import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Main.css";

//Firebase
import { loadDictionaryFB } from "../redux/modules/dictionary";

// styled componets
import styled from "styled-components";
//router
//redux
import { useSelector, useDispatch } from "react-redux";
import { updateDictionaryFB } from "../redux/modules/dictionary";
export default function Update({ match }) {
  //라우트
  let navigate = useNavigate();
  //리덕스
  // const topics = useSelector((state) => state);
  const dispatch = useDispatch();
  // parmas
  const { _id } = useParams();
  const dictionary_index = _id;

  // const cards = topics.dictionary.list[_id];

  const text = React.useRef(null);
  const text2 = React.useRef(null);
  const text3 = React.useRef(null);

  const getInputData = () => {
    const title = text.current.value;
    const mean = text2.current.value;
    const comment = text3.current.value;
    // completed: false,
    // 유효성 체크
    if (!title || !mean || !comment) {
      alert("아직 입력하지 않은 항목이 있습니다.");
      return false;
    }

    // 반환할 object
    const dictionary_obj = {
      title,
      mean,
      comment,
    };
    return dictionary_obj;
  };

  const upDictionary = () => {
    const dictionary_obj = getInputData();
    if (!dictionary_obj) return;
    // firebase에서 시간순으로 불러올 수 있도록 date 값을 추가, 암기/미암기 상태를 저장할 수 있도록 completed 값 추가
    const new_dictionary_obj = {
      ...dictionary_obj,
      date: Date.now(),
      completed: false,
    };
    dispatch(updateDictionaryFB(new_dictionary_obj, dictionary_index));
  };

  // LOAD
  React.useEffect(() => {
    // dispatch(loadDictionaryFB());
  }, []);

  const topics = useSelector((list) => list.dictionary.list);
  const cards = topics[_id];

  // 단어를 수정하는 함수
  // const upDictionary = () => {
  //   dispatch(
  //     updateDictionaryFB(
  //       {
  //         title: text.current.value,
  //         mean: text2.current.value,
  //         comment: text3.current.value,
  //         completed: false,
  //       },
  //       dictionary_index
  //     )
  //   );
  // };
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
            defaultValue={cards?.list.title}
          />
        </p>
        <p>
          <input
            name="mean"
            ref={text2}
            type="text"
            defaultValue={cards?.list.mean}
          />
        </p>
        <p>
          <input
            type="text"
            ref={text3}
            name="comment"
            defaultValue={cards?.list.comment}
          />
        </p>
        <p>
          <input
            type="submit"
            value="수정완료"
            onClick={() => {
              upDictionary(cards, dictionary_index);
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
}
