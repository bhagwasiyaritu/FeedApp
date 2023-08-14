import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {BaseUrl, endpoints} from '../../util/constants';

export const fetchCommentData = createAsyncThunk(
  'fetchCommentData',
  async data => {
    try {
      const response = await axios.get(
        `${BaseUrl}${endpoints.commentList}${data}/comments`,
      );
      console.log('Check Single Feed Response', response);
      return response.data;
    } catch (error) {
      console.log('Check Single Feed Error', error);
      return error;
    }
  },
);

const initialize = {
  commentList: [],
  error: null,
  loading: false,
};

const CommentList = createSlice({
  name: 'commentListData',
  initialState: initialize,
  extraReducers: builder => {
    builder.addCase(fetchCommentData.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchCommentData.fulfilled, (state, action) => {
      state.loading = false;
      state.commentList = action.payload;
      state.error = null;
    });
    builder.addCase(fetchCommentData.rejected, (state, action) => {
      state.loading = false;
      (state.commentList = []), (state.error = action.payload);
    });
  },
});

export default CommentList.reducer;
