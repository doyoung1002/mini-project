import React, { useState } from "react";
import { CommentListDiv, EditButton, SaveButton } from "./style";
// import { useQuery, useMutation } from "react-query";
// import { apiSlice } from "../../api/commentsApiSlice";

const Comment = ({ comments, onDelete, onEdit }) => {
  const [editId, setEditId] = useState(null); // 수정 중인 댓글의 id
  const [editContent, setEditContent] = useState(""); // 수정 중인 댓글의 내용
  const [editPassword, setEditPassword] = useState(""); // 수정 시 입력한 비밀번호
  const [deletePassword, setDeletePassword] = useState(""); // 삭제 시 입력한 비밀번호
  const [editPasswordError, setEditPasswordError] = useState(false); // 비밀번호 일치 여부 에러
  const [deletePasswordVisible, setDeletePasswordVisible] = useState(false);

  const handleDeleteClick = (id) => {
    setDeletePasswordVisible(true);
  };

  // 삭제 할 때 호출되는 함수
  const handleDelete = (id) => {
    if (deletePassword.trim() !== "") {
      onDelete(id, deletePassword);
    }
    setDeletePassword("");
    setDeletePasswordVisible(false);
  };

  // // 댓글 목록 가져오기
  // const { data: comments, isLoading, isError, error } = useQuery("comments", apiSlice.endpoints.getComments);

  // // 댓글 수정 뮤테이션 설정
  // const updateCommentMutation = useMutation((newComment) => apiSlice.endpoints.updateComment(newComment));

  // 특정 댓글의 수정 버튼 클릭 시 호출되는 함수
  const handleEditClick = (id, content) => {
    setEditId(id);
    setEditContent(content);
    setEditPassword("");
    setEditPasswordError(false);
  };

  // 특정 댓글의 저장 버튼 클릭 시 호출되는 함수입니다.
  const handleSaveClick = (id) => {
    // 비밀번호 확인 로직 추가
    if (editPassword.trim() !== "비밀번호") {
      alert("비밀번호가 일치하지 않습니다");
      setEditPasswordError(true);
      return;
    }

    // 수정된 댓글 저장
    // updateCommentMutation.mutate({ id, content: editContent });
    setEditId(null);
    setEditContent("");
    setEditPassword("");
    setEditPasswordError(false);
  };

  // // 로딩 중인 경우 로딩 표시
  // if (isLoading) {
  //   return <div>로딩 중...</div>;
  // }

  // // 오류 발생한 경우 에러 메시지 표시
  // if (isError) {
  //   return <div>오류: {error.message}</div>;
  // }

  // if (!comments) {
  //   return null; // 또는 원하는 대체 컨텐츠를 반환할 수 있습니다.
  // }

  return (
    <CommentListDiv>
      <div className="comments">
        {comments.map((comment) => (
          <div className="comment-box" key={comment.id}>
            <div className="comment-date">
              <p>{comment.date}</p>
            </div>

            <div className="comment-user">
              <p>{comment.user}</p>
            </div>

            <div className="comment-content">
              {editId === comment.id ? ( // 현재 수정 중인 댓글인 경우
                <>
                  <input
                    id="comBtn"
                    value={editContent}
                    onChange={(e) => {
                      if (e.target.value.trim().length > 50) {
                        return;
                      }
                      setEditContent(e.target.value);
                    }}
                  />

                  <input
                    id="pwBtn"
                    type="password"
                    value={editPassword}
                    onChange={(e) => {
                      if (e.target.value.trim().length > 15) {
                        return;
                      }
                      setEditPassword(e.target.value);
                    }}
                    placeholder="비밀번호 입력"
                  />
                </>
              ) : (
                <p>{comment.content}</p>
              )}
            </div>

            <div className="btnBox">
              {/* Save 버튼 */}
              {editId === comment.id && !deletePasswordVisible && (
                <SaveButton onClick={() => handleSaveClick(comment.id)}>Save</SaveButton>
              )}

              {/* Edit 버튼 */}
              {editId !== comment.id && !deletePasswordVisible && (
                <EditButton onClick={() => handleEditClick(comment.id, comment.content)}>Edit</EditButton>
              )}

              {/* Delete 버튼 */}
              {!deletePasswordVisible && (
                <button className="comment-delete" onClick={() => handleDeleteClick(comment.id)}>
                  Delete
                </button>
              )}
              {deletePasswordVisible && (
                <>
                  <input
                    id="deleteBox"
                    type="password"
                    value={deletePassword}
                    onChange={(e) => setDeletePassword(e.target.value)}
                    placeholder="비밀번호 입력"
                  />
                  <button className="deleteBtn" onClick={() => handleDelete(comment.id)}>
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </CommentListDiv>
  );
};

export default Comment;
