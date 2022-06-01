import React, { useRef } from "react";
import "../Main.css";
// styled componets
import styled from "styled-components";
//redux
import { useDispatch, useSelector } from "react-redux";
import { addDictionaryFB } from "../redux/modules/dictionary";
//router
import { useNavigate } from "react-router-dom";
export default function Write(props) {
  let navigate = useNavigate();
  // const topics = useSelector((state) => state.dictionary.list);
  const text = React.useRef(null);
  const text2 = React.useRef(null);
  const text3 = React.useRef(null);
  const dispatch = useDispatch();

  // firebase에서 시간순으로 불러올 수 있도록 date 값을 추가, 암기/미암기 상태를 저장할 수 있도록 completed 값 추가

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

  const addDictionary = () => {
    const dictionary_obj = getInputData();
    if (!dictionary_obj) return;
    // firebase에서 시간순으로 불러올 수 있도록 date 값을 추가, 암기/미암기 상태를 저장할 수 있도록 completed 값 추가
    const new_dictionary_obj = {
      ...dictionary_obj,
      date: Date.now(),
      completed: false,
    };
    dispatch(addDictionaryFB(new_dictionary_obj));
  };

  return (
    <WriteWrap>
      <form
        onSubmit={(event) => {
          event.preventDefault(); // 새로고침을 안한다는 명령어
        }}
      >
        <p>
          <Input
            type="text"
            name="title"
            placeholder="단어를 입력하세요."
            ref={text}
          />
        </p>
        <p>
          <Input
            name="mean"
            type="text"
            placeholder="뜻을 입력하세요."
            ref={text2}
          />
        </p>
        <p>
          <Input
            type="text"
            name="comment"
            placeholder="예시를 입력하세요."
            ref={text3}
          />
        </p>
        <p>
          <Btn
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

const Input = styled.input`
  width: 400px;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid #2467dc;
  padding: 0;
  margin-bottom: 50px;
  padding-top: 30px;
`;

const Btn = styled.input`
  width: 200px;
  height: 50px;
  color: white;
  padding: 10px 0;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin: 0px 2px;
  border-radius: 5px;
  border: none;
  background-color: #2467dc;
  cursor: pointer;
`;
