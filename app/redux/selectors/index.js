import { createSelector } from '@reduxjs/toolkit';

export const getFeedData = createSelector(
    [state => state.feedData],
    feedData => feedData,
  );