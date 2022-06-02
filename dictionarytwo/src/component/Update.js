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
      // date: Date.now(),
      // completed: false,
    };
    dispatch(updateDictionaryFB(new_dictionary_obj, cards.id));
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
        <FromInner>
          <p>
            <Title>Title</Title>
            <Input
              type="text"
              ref={text}
              name="title"
              defaultValue={cards?.title}
            />
          </p>
          <p>
            <Title>Mean</Title>
            <Input
              name="mean"
              ref={text2}
              type="text"
              defaultValue={cards?.mean}
            />
          </p>
          <p>
            <Title>Comment</Title>
            <Input
              type="text"
              ref={text3}
              name="comment"
              defaultValue={cards?.comment}
            />
          </p>
        </FromInner>
        <p>
          <Input_Btn
            type="submit"
            value="수정완료"
            onClick={() => {
              upDictionary(cards, dictionary_index);
              navigate(-1);
            }}
          />
          <Btn
            onClick={() => {
              navigate(-1);
            }}
          >
            취소
          </Btn>
        </p>
      </form>
    </>
  );
}

const Title = styled.p`
  font-size: 28px;
  color: #2467dc;
  font-weight: bold;
`;
const Input = styled.input`
  width: 400px;
  font-size: 34px;
  border: none;
  border-bottom: 1px solid #2467dc;
  padding: 0;
  margin-bottom: 50px;
  padding-top: 30px;
`;
const FromInner = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  width: 100vw;
`;
const Input_Btn = styled.input`
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
