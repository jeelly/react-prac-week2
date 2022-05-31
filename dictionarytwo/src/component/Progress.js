import React from "react";
import styled, { keyframes } from "styled-components";

const Progress = (props) => {
  // return <Circle></Circle>;
};

export default Progress;

const CircleFade = keyframes`
  0% {top: 12vh;}
  10% {top: 10vh;}
  20% {top: 12vh;}
  30% {top: 10vh;}
  40% {top: 12vh;}
  50% {left:70vw;top: 10vh;}
  60% {top: 12vh;}
  70% {top: 10vh;}
  80% {top: 12vh;}
  90% {top: 10vh;}
  100% {top: 12vh;}
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background: rosybrown;
  border-radius: 50%;
  position: absolute;
  top: 11vh;
  left: 35vw;
  animation: ${CircleFade} 7s 1s infinite linear alternate;
`;
