import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {BaseUrl, endpoints} from '../../util/constants';

export const fetchFeedData = createAsyncThunk('fetchFeedData', async (data) => {
  try {
    const response = await axios.get(`${BaseUrl}${endpoints.feedAPI}${data}`);
    console.log('Check Response', response);
    return response.data;
  } catch (error) {
    console.log('Check Error', error);
    return error;
  }
});

const initialize = {
  feedData: [],
  error: null,
  loading: false,
};

const FeedData = createSlice({
  name: 'feedData',
  initialState: initialize,
  extraReducers: builder => {
    builder.addCase(fetchFeedData.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchFeedData.fulfilled, (state, action) => {
      state.loading = false;
      state.feedData = action.payload?.articles;
      state.error = null;
    });
    builder.addCase(fetchFeedData.rejected, (state, action) => {
      state.loading = false;
      (state.feedData = []), (state.error = action.payload);
    });
  },
});

export default FeedData.reducer;
