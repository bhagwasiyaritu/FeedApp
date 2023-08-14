import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FeedDataSlice from '../slice/FeedData.slice';
import LoginSlice from '../slice/Login.slice';
import SingleFeedSlice from '../slice/SingleFeed.slice';
import CommentsListSlice from '../slice/CommentsList.slice';
import CreateCommentSlice from '../slice/CreateComment.slice';

export const reducer = {
  loginData: LoginSlice,
  feedData: FeedDataSlice,
  singleFeedData:SingleFeedSlice,
  commentListData:CommentsListSlice,
  commentData:CreateCommentSlice
};

const whitelist = ['loginData'];
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: whitelist,
};
const rootReducer = combineReducers(reducer);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export const persistor = persistStore(store);
