import React from "react";
import "../Main.css";
// styled componets
import styled from "styled-components";
//redux
import { useDispatch, useSelector } from "react-redux";
import { createDictionary } from "../redux/modules/dictionary";
export default function Write(props) {
  const text = React.useRef(null);
  const text1 = React.useRef(null);
  const text2 = React.useRef(null);

  const topics = useSelector((state) => state.dictionary);
  const dispatch = useDispatch();

  const addDictionary = () => {
    dispatch(
      createDictionary({
        // id: topics.length + 1,
        title: text.current.value,
        mean: text1.current.value,
        comment: text2.current.value,
      })
    );
  };
  console.log(topics);
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
            ref={text1}
          />
        </p>
        <p>
          <input
            type="text"
            name="comment"
            placeholder="해설을 입력하세요."
            ref={text2}
          />
        </p>
        <p>
          <input type="submit" value="Create" onClick={addDictionary} />
          {/* <button onClick={addDictionary}>Createsdasa</button> */}
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
