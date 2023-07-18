import { DetailComment } from "./style";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CommentForm = ({ onConfirm }) => {
  const [nickname, setNickname] = useState("");
  const [comment, setComment] = useState("");
  const [password, setPassword] = useState("");
  const [comments, setComments] = useState([]);
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const { itemId } = useParams();

  useEffect(() => {
    fetchComments();
  }, [itemId]);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://honeyitem.shop/api/items/${itemId}/comments`
      );
      setLoading(false);
      setComments(response.data.comments);
      console.log(response.data.comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleNicknameChange = (event) => {
    if (event.target.value.trim().length > 15) {
      return;
    }
    setNickname(event.target.value);
  };

  const handleCommentChange = (event) => {
    if (event.target.value.trim().length > 50) {
      return;
    }
    setComment(event.target.value);
  };

  const handlePasswordChange = (event) => {
    if (event.target.value.trim().length > 15) {
      return;
    }
    setPassword(event.target.value);
  };

  const handlePasswordConfirm = (event) => {
    if (event.target.value.trim().length > 15) {
      return;
    }
    setConfirm(event.target.value);
  };

  const handleButtonClick = async () => {
    if (!nickname || !comment || !password || !confirm) {
      alert("닉네임과 비밀번호 댓글을 모두 입력해주세요.");
      return;
    }
    try {
      const response = await axios.post(
        `https://honeyitem.shop/api/items/${itemId}/comments`,
        {
          nickname: nickname,
          comment: comment,
          password: password,
          confirm: confirm,
        }
      );

      if (response.status === 200) {
        await fetchComments();
        onConfirm(response.data);
        setNickname("");
        setPassword("");
        setComment("");
        setConfirm("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DetailComment>
      <input
        id='nickName-input'
        placeholder='닉네임'
        value={nickname}
        onChange={handleNicknameChange}
      />
      <input
        id='comment-input'
        placeholder='댓글을 입력하세요'
        value={comment}
        onChange={handleCommentChange}
      />
      <input
        id='password-input'
        placeholder='비밀번호'
        type='password'
        value={password}
        onChange={handlePasswordChange}
      />

      <input
        id='password-Confirm-input'
        placeholder='비밀번호 확인'
        type='password'
        value={confirm} // 수정
        onChange={handlePasswordConfirm}
      />

      <button onClick={handleButtonClick}>확인</button>

      {/* Comment List */}
      {comments.map((comment) => (
        <div key={comment.commentId}>
          <p>Nickname: {comment.nickname}</p>
          <p>Comment: {comment.comment}</p>
        </div>
      ))}
    </DetailComment>
  );
};

export default CommentForm;
