import {createSelector} from '@reduxjs/toolkit';

export const login = createSelector(
  [state => state.loginData],
  loginData => loginData,
);

export const getFeedData = createSelector(
  [state => state.feedData],
  feedData => feedData,
);

export const getSingleFeedData = createSelector(
  [state => state.singleFeedData],
  singleFeedData => singleFeedData,
);
