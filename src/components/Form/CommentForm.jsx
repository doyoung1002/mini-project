import { DetailComment, CommentBox } from "./style";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useRef } from "react";

const CommentForm = ({ onConfirm }) => {
  const [nickname, setNickname] = useState("");
  const [comment, setComment] = useState("");
  const [password, setPassword] = useState("");
  const [comments, setComments] = useState([]);
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editComment, setEditComment] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();
  const [deleteConfirmation, setDeleteConfirmation] = useState(false); // 추가
  const [deletePasswordVisible, setDeletePasswordVisible] = useState(false);
  const [deletePassword, setDeletePassword] = useState("");

  const { itemId, commentID } = useParams();

  console.log(itemId);

  useEffect(() => {
    fetchComments();
  }, [itemId]);

  const fetchComments = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://honeyitem.shop/api/items/${itemId}/comments`
      );
      setLoading(false);
      setComments(response.data.comments);

      console.log(response.data.comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
      setLoading(false);
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
    // if (event.target.value.trim().length > 15) {
    //   return;
    // }
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
    console.log(nickname, comment, password, confirm);
    try {
      const response = await axios.post(
        `https://honeyitem.shop/api/items/${itemId}/comments/`,
        {
          nickname: nickname,
          comment: comment,
          password: password,
          confirm: confirm,
        }
      );
      console.log(response);

      if (response.status === 201) {
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

  const handleEdit = (id) => {
    console.log(comments);
    const selectedComment = comments.find(
      (comment) => comment.commentId === id
    );

    if (selectedComment) {
      setEditId(id);
      setEditComment(selectedComment.comment);
      setEditPassword("");
      setIsEditing(true);
    }
    console.log(selectedComment);
  };

  const handleEditPasswordChange = (event) => {
    if (event.target.value.trim().length > 15) {
      return;
    }
    setEditPassword(event.target.value);
  };

  const handleComplete = async (commentId) => {
    try {
      console.log(comments);
      const selectedComment = comments.filter(
        (comment) => comment.commentId === commentId
      );

      console.log(selectedComment, editPassword);

      if (selectedComment) {
        if (selectedComment.password === editPassword) {
          console.log(editPassword);
          const response = await axios.put(
            `https://honeyitem.shop/api/items/${itemId}/comments/${commentId}`,
            {
              comment: editComment,
              password: editPassword,
            }
          );

          if (response.status === 200) {
            await fetchComments();
            setEditId(null);
            setEditComment("");
            setEditPassword("");
          }
        } else {
          alert("비밀번호가 일치하지 않습니다.");
        }
      } else {
        alert("댓글을 찾을 수 없습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (commentId) => {
    console.log(inputRef.current.value);
    try {
      const response = await axios.delete(
        `https://honeyitem.shop/api/items/${itemId}/comments/${commentId}`,
        {
          data: {
            password: inputRef.current.value,
          },
        }
      );
      if (response.status === 200) {
        console.log(response);
        await fetchComments();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = (commentId) => {
    setDeletePasswordVisible(true);
    setEditId(commentId);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await axios.delete(
        `https://honeyitem.shop/api/items/${itemId}/comments/${editId}`,
        {
          data: {
            password: deletePassword,
          },
        }
      );

      if (response.status === 200) {
        console.log(response);
        await fetchComments();
        setDeletePasswordVisible(false);
        setDeletePassword("");
        setEditId(null);
      } else {
        console.log("Failed to delete comment.");
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
        ref={inputRef}
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

      <button className='checkBtn' onClick={handleButtonClick}>
        확인
      </button>

      {/* Comment List */}
      {comments.map((comment) => (
        <CommentBox key={comment.commentId}>
          <p id='nicknameTitle'>닉네임 : {comment.nickname}</p>
          <p id='commentTitle'>댓글 : {comment.comment}</p>

          {editId === comment.commentId && isEditing ? ( // 수정
            <>
              <input
                id='editComment-input'
                placeholder='수정할 댓글을 입력하세요'
                value={editComment}
                onChange={(event) => setEditComment(event.target.value)}
              />
              <input
                id='editPassword-input'
                placeholder='비밀번호를 입력하세요'
                type='password'
                value={editPassword}
                onChange={handleEditPasswordChange}
              />

              <button
                className='saveBtn'
                onClick={() => handleComplete(comment.commentId)}>
                저장
              </button>
            </>
          ) : (
            <>
              {/* <button
                className='editBtn'
                onClick={() => handleEdit(comment.commentId)}>
                수정
              </button> */}
              {!deletePasswordVisible && editId !== comment.commentId && (
                <button
                  className='commentDelete'
                  onClick={() => handleDeleteClick(comment.commentId)}>
                  삭제
                </button>
              )}
              {deletePasswordVisible && editId === comment.commentId && (
                <>
                  <input
                    id='deleteInput'
                    type='password'
                    value={deletePassword}
                    onChange={(e) => setDeletePassword(e.target.value)}
                    placeholder='비밀번호 입력하세요'
                  />
                  <button className='deleteBtn' onClick={handleDeleteConfirm}>
                    확인
                  </button>
                </>
              )}
            </>
          )}
        </CommentBox>
      ))}
    </DetailComment>
  );
};

export default CommentForm;

// 비밀번호 몰라서 비교르 못함
// editpassword, commentid,
