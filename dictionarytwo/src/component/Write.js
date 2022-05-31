import React, { useRef } from "react";
import "../Main.css";
// styled componets
import styled from "styled-components";
//redux
import { useDispatch, useSelector } from "react-redux";
import { createDictionary, addDictionaryFB } from "../redux/modules/dictionary";
//router
import { useNavigate } from "react-router-dom";
export default function Write(props) {
  let navigate = useNavigate();
  const topics = useSelector((state) => state.dictionary.list);
  const text = React.useRef(null);
  const text2 = React.useRef(null);
  const text3 = React.useRef(null);

  const dispatch = useDispatch();
  const addDictionary = () => {
    // dispatch(
    //   createDictionary({
    //     // id: topics.length + 1,
    //     title: text.current.value,
    //     mean: text2.current.value,
    //     comment: text3.current.value,
    //     completed: false,
    //   })
    // );
    dispatch(
      addDictionaryFB({
        title: text.current.value,
        mean: text2.current.value,
        comment: text3.current.value,
        completed: false,
      })
    );
  };

  return (
    <WriteWrap>
      <form
        onSubmit={(event) => {
          event.preventDefault(); // 새로고침을 안한다는 명령어
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            placeholder="단어를 입력하세요."
            ref={text}
          />
        </p>
        <p>
          <input
            name="mean"
            type="text"
            placeholder="뜻을 입력하세요."
            ref={text2}
          />
        </p>
        <p>
          <input
            type="text"
            name="comment"
            placeholder="예시를 입력하세요."
            ref={text3}
          />
        </p>
        <p>
          <input
            type="submit"
            value="Create"
            onClick={() => {
              addDictionary();
              navigate(-1);
            }}
          />
        </p>
      </form>
    </WriteWrap>
  );
}

const WriteWrap = styled.div`
  padding: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
