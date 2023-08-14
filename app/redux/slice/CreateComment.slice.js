import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {BaseUrl, endpoints} from '../../util/constants';

export const createCommentData = createAsyncThunk(
  'fetchCommentData',
  async data => {
    const payload = {
      comment: data?.comment,
    };
    try {
      const response = await axios.post(
        `${BaseUrl}${endpoints.commentList}${data?.slug}/comments`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${data?.token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

const initialize = {
  commentData: [],
  error: null,
  loading: false,
};

const CreateComment = createSlice({
  name: 'commentData',
  initialState: initialize,
  extraReducers: builder => {
    builder.addCase(createCommentData.pending, state => {
      state.loading = true;
    });
    builder.addCase(createCommentData.fulfilled, (state, action) => {
      state.loading = false;
      state.commentData = action.payload;
      state.error = null;
    });
    builder.addCase(createCommentData.rejected, (state, action) => {
      state.loading = false;
      (state.commentData = []), (state.error = action.payload);
    });
  },
});

export default CreateComment.reducer;
