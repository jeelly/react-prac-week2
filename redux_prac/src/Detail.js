// 리액트 패키지를 불러옵니다.
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeBucket } from "./redux/modules/bucket";
import { useHistory } from "react-router-dom";
const Detail = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const parmas = useParams();
  const bucket_index = parmas.index;
  const bucket_list = useSelector((state) => state.bucket.list);

  // console.log(bucket_list);
  return (
    <div>
      <h1>{bucket_list[bucket_index]}</h1>
      <button
        onClick={() => {
          dispatch(removeBucket(bucket_index));
          history.goBack();
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default Detail;
