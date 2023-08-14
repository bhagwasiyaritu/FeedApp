import {Dimensions} from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const BaseUrl = 'https://api.realworld.io/api/';
export const endpoints = {
  feedAPI: 'articles?limit=10&offset=',
  loginAPI: 'users/login',
  singleFeedApi: 'articles/',
  commentList: 'articles/',
};
