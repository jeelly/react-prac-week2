import React from "react";
import { useState } from "react";
import "../Main.css";
// styled componets
import styled from "styled-components";
import { Link } from "react-router-dom";

//세부 페이지
import ListPage from "./ListPage";

export default function Main() {
  return (
    <>
      <ButtonInner>
        <Link to="write">
          <WriteBtn>Write</WriteBtn>
        </Link>
        {/* <WriteBtn
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          위로가기
        </WriteBtn> */}
      </ButtonInner>
      <ListPage />
    </>
  );
}
const ButtonInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WriteBtn = styled.div`
  width: 200px;
  height: 50px;
  color: white;
  padding: 10px 0;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin: 0 10px;
  border-radius: 5px;
  /* border: 1px solid black; */
  background-color: #2467dc;
  /* background-color: rgba(0, 0, 0, 0.4); */
  cursor: pointer;
`;
