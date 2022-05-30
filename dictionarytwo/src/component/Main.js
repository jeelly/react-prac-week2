import React from "react";
import { useState } from "react";
import "../Main.css";
// styled componets
import { Link } from "react-router-dom";

//세부 페이지
import ListPage from "./ListPage";
import Write from "./Write";
import Card from "./Card";

export default function Main() {
  return (
    <>
      <ListPage />
      <Link to="write">write</Link>
    </>
  );
}
