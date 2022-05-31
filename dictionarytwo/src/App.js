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
    <>
      <BrowserRouter>
        <Link to="/">
          <Title>단어장</Title>
          <Progress />
        </Link>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/write" element={<Write />} />
          <Route path="/update/:_id" element={<Update />} />
          <Route path="/card/:_id" element={<Card />} />
          <Route path="*" element={<NotFound />} />
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
