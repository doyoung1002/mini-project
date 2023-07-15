import React from "react";
import { DetailComment } from "./style";

const CommentForm = ({ onConfirm }) => {
  return (
    <DetailComment>
      <input id="comment-input" placeholder="댓글을 입력하세요" />
      <button onClick={onConfirm}>확인</button>
    </DetailComment>
  );
};

export default CommentForm;
