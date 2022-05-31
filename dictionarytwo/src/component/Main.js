import React from "react";
import { useState } from "react";
import "../Main.css";
// styled componets
import { Link } from "react-router-dom";

//세부 페이지
import ListPage from "./ListPage";

export default function Main() {
  return (
    <>
      <ListPage />
      <Link to="write">write</Link>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        위로가기
      </button>
    </>
  );
}
