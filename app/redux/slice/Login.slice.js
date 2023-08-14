import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {BaseUrl, endpoints} from '../../util/constants';

export const onLoginApi = createAsyncThunk('onLoginApi', async (data) => {
  try {
    const response = await axios.post(`${BaseUrl}${endpoints.loginAPI}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
});

const initialize = {
  loginData: [],
  error: null,
  loading: false,
};

const Login = createSlice({
  name: 'loginData',
  initialState: initialize,
  extraReducers: builder => {
    builder.addCase(onLoginApi.pending, state => {
      state.loading = true;
    });
    builder.addCase(onLoginApi.fulfilled, (state, action) => {
      state.loading = false;
      state.loginData = action.payload;
      state.error = null;
    });
    builder.addCase(onLoginApi.rejected, (state, action) => {
      state.loading = false;
      (state.loginData = []), (state.error = action.payload);
    });
  },
});

export default Login.reducer;