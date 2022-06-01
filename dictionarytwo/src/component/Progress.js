import React from "react";
import styled, { keyframes } from "styled-components";

const Progress = (props) => {
  return (
    <>
      <Circle></Circle>
      <Circle2></Circle2>
    </>
  );
};

export default Progress;

const CircleFade = keyframes`
24% {border-radius:50%;width:20px;height:20px;}
25% {left:25vw;top:19vh;border-radius:20%; width:30px; height:10px;}
26% {border-radius:50%;width:20px;height:20px;}
38% {top:0vh;}

49% {border-radius:50%;width:20px;height:20px;}
50% {left:0vw;top:19vh;border-radius:20%; width:30px; height:10px;}
51% {border-radius:50%;width:20px;height:20px;}
63% {top:0vh;}

74% {border-radius:50%;width:20px;height:20px;}
75% {left:25vw;top:19vh;border-radius:20%; width:30px; height:10px;}
76% {border-radius:50%;width:20px;height:20px;}
88% {top:0vh;}

98% {border-radius:50%;width:20px;height:20px;}
100% {left:0vw;top:19vh;border-radius:20%; width:30px; height:10px;}
 `;
const CircleFade2 = keyframes`
    0% {}
    25% {left:20vw}
    50% {left:0vw}
    75% {left:20vw}
    100% {left:0vw}
  `;
const Circle = styled.div`
  width: 20px;
  height: 20px;
  background: skyblue;
  border-radius: 50%;
  position: absolute;
  top: 1vh;
  left: 1vw;
  animation: ${CircleFade} 7s 1s infinite linear alternate;
`;

const Circle2 = styled.div`
  width: 100px;
  height: 10px;
  background: skyblue;
  border-radius: 5px;
  position: absolute;
  top: 20vh;
  left: 1vw;
  animation: ${CircleFade2} 7s 1s infinite linear alternate;
`;
