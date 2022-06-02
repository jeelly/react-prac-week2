import React from "react";
import { useState } from "react";
import "../Main.css";
// styled componets
import styled, { keyframes } from "styled-components";
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
      </ButtonInner>
      <ListPage />
      <Arrow
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        🔝
      </Arrow>
    </>
  );
}
const ButtonInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Arrow = styled.div`
  font-size: 44px;
  position: fixed;
  bottom: 1vh;
  right: 1vw;
  color: #2467dc;
  cursor: pointer;
`;
const WriteBtn = styled.button`
  width: 200px;
  height: 50px;
  color: white;
  padding: 10px 0;
  text-align: center;
  /* font-weight: bold; */
  font-size: 24px;
  margin: 0 10px;
  border-radius: 5px;
  border: none;
  background-color: #2467dc;
  /* background-color: rgba(0, 0, 0, 0.4); */
  cursor: pointer;
  transition: background-color 0.5s, transform 3s;
  &:hover {
    background-color: rgba(36, 103, 220, 0.5);
  }

  // const CircleFade2 = keyframes
`;
//   from {
//     -webkit-transform: rotate(0deg);
//     -o-transform: rotate(0deg);
//     transform: rotate(0deg);
//   }
//   to {
//     -webkit-transform: rotate(360deg);
//     -o-transform: rotate(360deg);
//     transform: rotate(360deg);
//   }
// `;
// const WriteBtn = styled.button`
//   border: none;
//   background-color: transparent;
//   color: rgba(36, 103, 220);
//   font-size: 100px;
//   transition: background-color 0.5s;
//   animation: ${CircleFade2} 2s 1s infinite linear alternate;
//   margin: 0;
//   padding: 0;
//   cursor: pointer;
//   &:hover {
//     /* opacity: 0; */
//     rotate: (0);
//     /* transform: scale(2.2); */
//     /* transform: rotate(0); */
//   }
// `;
