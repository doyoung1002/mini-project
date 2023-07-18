import React, { useState, useEffect } from "react";
import { CommentListDiv, EditButton, SaveButton } from "./style";
import axios from "axios";

const Comment = ({ itemId, onDelete, onEdit }) => {
  const [comments, setComments] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editContent, setEditContent] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [deletePassword, setDeletePassword] = useState("");
  const [editPasswordError, setEditPasswordError] = useState(false);
  const [deletePasswordVisible, setDeletePasswordVisible] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [itemId]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `https://honeyitem.shop/api/items/${itemId}/comments`
      );
      setComments(response.data.comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleDeleteClick = (id) => {
    setDeletePasswordVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://honeyitem.shop/api/items/${itemId}/comments/${id}`,
        {
          data: {
            password: deletePassword,
          },
        }
      );
      if (response.status === 200) {
        onDelete(id);
        setDeletePassword("");
        setDeletePasswordVisible(false);
      } else {
        console.error("Error deleting comment:", response.data.message);
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleEditClick = (id, content) => {
    setEditId(id);
    setEditContent(content);
    setEditPassword("");
    setEditPasswordError(false);
  };

  const handleSaveClick = (id) => {
    if (editPassword.trim() !== "비밀번호") {
      alert("비밀번호가 일치하지 않습니다");
      setEditPasswordError(true);
      return;
    }

    setEditId(null);
    setEditContent("");
    setEditPassword("");
    setEditPasswordError(false);
  };

  return (
    <CommentListDiv>
      <div className='comments'>
        {comments.map((comment) => (
          <div className='comment-box' key={comment.id}>
            <div className='comment-date'>
              <p>{comment.date}</p>
            </div>

            <div className='comment-user'>
              <p>{comment.user}</p>
            </div>

            <div className='comment-content'>
              {editId === comment.id ? (
                <>
                  <input
                    id='comBtn'
                    value={editContent}
                    onChange={(e) => {
                      if (e.target.value.trim().length > 50) {
                        return;
                      }
                      setEditContent(e.target.value);
                    }}
                  />

                  <input
                    id='pwBtn'
                    type='password'
                    value={editPassword}
                    onChange={(e) => {
                      if (e.target.value.trim().length > 15) {
                        return;
                      }
                      setEditPassword(e.target.value);
                    }}
                    placeholder='비밀번호 입력'
                  />
                </>
              ) : (
                <p>{comment.content}</p>
              )}
            </div>

            <div className='btnBox'>
              {editId === comment.id && !deletePasswordVisible && (
                <SaveButton onClick={() => handleSaveClick(comment.id)}>
                  Save
                </SaveButton>
              )}

              {editId !== comment.id && !deletePasswordVisible && (
                <EditButton
                  onClick={() => handleEditClick(comment.id, comment.content)}>
                  Edit
                </EditButton>
              )}

              {!deletePasswordVisible && (
                <button
                  className='comment-delete'
                  onClick={() => handleDeleteClick(comment.id)}>
                  Delete
                </button>
              )}
              {deletePasswordVisible && (
                <>
                  <input
                    id='deleteBox'
                    type='password'
                    value={deletePassword}
                    onChange={(e) => setDeletePassword(e.target.value)}
                    placeholder='비밀번호 입력'
                  />
                  <button
                    className='deleteBtn'
                    onClick={() => handleDelete(comment.id)}>
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
