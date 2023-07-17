import React from "react";
// import React, {useState, useCallback} from "react";
// import axios from "axios";
import { DetailComment } from "./style";
// import { useMutation, apiSlice } from "../../api/commentsApiSlice";

const CommentForm = ({ onConfirm }) => {
  // const [nickname, setNickname] = useState("");
  // const [comment, setComment] = useState("");
  // const [password, setPassword] = useState("");

  // const handleNicknameChange = (event) => {
  //   setNickname(event.target.value);
  // };

  // const handleCommentChange = (event) => {
  //   setComment(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleButtonClick = async () => {
  //   if (!nickname || !comment || !password) {
  //     alert("닉네임과 비밀번호 댓글을 모두 입력해주세요.");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post("your-server-url/comments", {
  //       user: nickname,
  //       pw: password,
  //       content: comment,
  //       date: new Date().toISOString(),
  //     });

  //     if (response.status === 200) {
  //       onConfirm(response.data);
  //       setNickname("");
  //       setPassword("");
  //       setComment("");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // ------------------------------------리액트 쿼리 ------------------------------------
  // const CommentForm = () => {
  //   const [postComment, { isLoading }] = useMutation(apiSlice.endpoints.postComment);

  //   const [nickname, setNickname] = React.useState("");
  //   const [password, setPassword] = React.useState("");
  //   const [comment, setComment] = React.useState("");

  //   const handleButtonClick = () => {
  //     if (!nickname || !password || !comment) {
  //       alert("닉네임과 비밀번호 댓글을 모두 입력해주세요.");
  //       return;
  //     }

  //     postComment({ nickname, password, comment })
  //       .unwrap()
  //       .then((payload) => {
  //         setNickname("");
  //         setPassword("");
  //         setComment("");
  //       })
  //       .catch((error) => console.error(error));
  //   };

  return (
    <DetailComment>
      {/* <input
        id="nickName-input"
        placeholder="닉네임을 입력하세요"
        value={nickname}
        onChange={(e) => {
          if (e.target.value.trim().length > 11) {
            return;
          }
          setNickname(e.target.value);
        }}
      />
      <input
        id="password-input"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={(e) => {
          if (e.target.value.trim().length > 15) {
            return;
          }
          setPassword(e.target.value);
        }}
      />
      <input
        id="comment-input"
        placeholder="댓글을 입력하세요"
        value={comment}

        // 글자수 제한
        onChange={(e) => {
          if (e.target.value.trim().length > 50) {
            return;
          }
          setComment(e.target.value);
        }}
      /> */}

      <input id="nickName-input" placeholder="닉네임" />
      <input id="password-input" type="password" placeholder="비밀번호" />
      <input id="comment-input" placeholder="댓글을 입력하세요" />

      <button onClick={onConfirm}>확인</button>
      {/* <button onClick={handleButtonClick} disabled={isLoading}>확인</button> */}
    </DetailComment>
  );
};

export default CommentForm;
