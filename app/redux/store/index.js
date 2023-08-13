import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FeedDataSlice from '../slice/FeedData.slice';

export const reducer = {
  feedData: FeedDataSlice,
};

const whitelist = ['loginApi'];
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
