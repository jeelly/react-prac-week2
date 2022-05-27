import React from "react";
import "../Main.css";
// styled componets
import styled from "styled-components";

export default function Write() {
  return (
    <WriteWrap>
      <h1>입력받는페이지</h1>
      <form>
        <p>
          <input type="text" name="title" placeholder="단어를 입력하세요." />
        </p>
        <p>
          <textarea name="mean" placeholder="뜻을 입력하세요." />
        </p>
        <p>
          <input type="text" name="Comment" placeholder="해설을 입력하세요." />
        </p>
        <p>
          <input type="submit" value="입력하기" />
        </p>
      </form>
    </WriteWrap>
  );
}

const WriteWrap = styled.ul`
  padding: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
