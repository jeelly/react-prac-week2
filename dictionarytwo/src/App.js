import "./Main.css";
// styled componets
import styled from "styled-components";
// Route
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//세부 페이지
import Main from "./component/Main";
import Write from "./component/Write";
import Card from "./component/Card";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">
          <Title>단어장</Title>
        </Link>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/write" element={<Write />} />
          <Route path="/card/:_id" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const Title = styled.h1`
  color: skyblue;
  margin-top: 50px;
  margin-bottom: 50px;
`;
