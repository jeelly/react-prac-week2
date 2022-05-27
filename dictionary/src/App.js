import "./Main.css";
// styled componets
import styled from "styled-components";
// Route
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//세부 페이지
import Main from "./component/Main";
import Write from "./component/Write";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">
          <Title>단어장</Title>
        </Link>
        <Link to="write">write</Link>
        <ListWrap>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/write" element={<Write />} />
          </Routes>
        </ListWrap>
      </BrowserRouter>
    </>
  );
}

const Title = styled.h1`
  color: skyblue;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const ListWrap = styled.div`
  display: flex;
  padding: 0;
`;
