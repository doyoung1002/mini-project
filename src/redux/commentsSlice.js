import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api'; // 가정: api는 서버에 요청을 보내는 함수들을 export하는 모듈

export const getComments = createAsyncThunk('comments/getComments', async () => {
  const response = await api.getComments(); // 서버에서 댓글을 가져오는 API 요청
  return response.data;
});

export const deleteComment = createAsyncThunk('comments/deleteComment', async (id) => {
  const response = await api.deleteComment(id); // 서버에서 댓글을 삭제하는 API 요청
  return response.data;
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.fulfilled, (state, action) => {
        // 댓글을 성공적으로 가져왔을 때의 상태 업데이트 로직
        return action.payload;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        // 댓글을 성공적으로 삭제했을 때의 상태 업데이트 로직
        return state.filter((comment) => comment.id !== action.payload.id);
      });
  },
});

export default commentsSlice.reducer;
