import React from "react";
import { CommentListDiv } from "./style";

const Comment = ({ comments, onDelete }) => {
  if (!comments) {
    return null; // 또는 원하는 대체 컨텐츠를 반환할 수 있습니다.
  }

  return (
    <CommentListDiv>
      <div className="comments">
        {comments.map((comment) => (
          <div className="comment-box" key={comment.id}>
            <div className="comment">
              <div className="comment-user">
                <p>{comment.user}</p>
              </div>

              <div className="comment-content">
                <p>{comment.content}</p>
              </div>

              <div className="comment-date">
                <p>{comment.date}</p>
              </div>

              <div className="btnBox">
                <button className="comment-edit">Edit</button>
                <button className="comment-delete" onClick={() => onDelete(comment.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CommentListDiv>
  );
};

export default Comment;
