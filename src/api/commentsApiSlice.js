// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const apiSlice = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: 'your-server-url' }),
//   endpoints: (builder) => ({
//     getComments: builder.query({
//       query: () => 'comments',
//     }),
//     updateComment: builder.mutation({
//       query: ({ id, content, password }) => ({
//         url: `comments/${id}`,
//         method: 'PUT',
//         body: {
//           content,
//           password,
//         },
//       }),
//     }),
//     deleteComment: builder.mutation({
//       query: ({ id, password }) => ({
//         url: `comments/${id}`,
//         method: 'DELETE',
//         body: { password },
//       }),
//     }),
//     postComment: builder.mutation({
//       query: ({ nickname, password, comment }) => ({
//         url: 'comments',
//         method: 'POST',
//         body: {
//           user: nickname,
//           pw: password,
//           content: comment,
//           date: new Date().toISOString(),
//         },
//       }),
//     }),
//   }),
// });

// export const { useGetCommentsQuery, useUpdateCommentMutation, useDeleteCommentMutation, usePostCommentMutation } = apiSlice;
