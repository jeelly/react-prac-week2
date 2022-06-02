import React, { useEffect } from "react";
import "./Main.css";

// styled componets
import styled from "styled-components";
// Route
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//세부 페이지
import Main from "./component/Main";
import Write from "./component/Write";
import Card from "./component/Card";
import Update from "./component/Update";
import NotFound from "./component/NotFound";
import Progress from "./component/Progress";

export default function App() {
  return (
    <Wrap>
      <BrowserRouter>
        <Link to="/">
          <Title>Dictionary</Title>
          <Progress />
        </Link>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Write" element={<Write />} />
          <Route path="/update/:_id" element={<Update />} />
          <Route path="/card/:_id" element={<Card />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Wrap>
  );
}
const Wrap = styled.div`
  /* background-color: #505050; */
  padding-top: 100px;
`;
const Title = styled.h1`
  color: black;
  /* margin-top: 50px; */
  margin-bottom: 50px;
`;
