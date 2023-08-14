import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {BaseUrl, endpoints} from '../../util/constants';

export const fetchSingleFeedData = createAsyncThunk(
  'fetchSingleFeedData',
  async data => {
    try {
      const response = await axios.get(
        `${BaseUrl}${endpoints.singleFeedApi}${data}`,
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
  singleFeedData: {},
  error: null,
  loading: false,
};

const SingelFeed = createSlice({
  name: 'singleFeedData',
  initialState: initialize,
  extraReducers: builder => {
    builder.addCase(fetchSingleFeedData.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchSingleFeedData.fulfilled, (state, action) => {
      state.loading = false;
      state.singleFeedData = action.payload?.article;
      state.error = null;
    });
    builder.addCase(fetchSingleFeedData.rejected, (state, action) => {
      state.loading = false;
      (state.singleFeedData = []), (state.error = action.payload);
    });
  },
});

export default SingelFeed.reducer;
