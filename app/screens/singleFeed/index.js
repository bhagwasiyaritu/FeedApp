import {View, Text, ScrollView} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {commonStyle} from '../../util/commonStyles';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {
  getCommentData,
  getSingleFeedData,
  login,
  postCommentData,
} from '../../redux/selectors';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {fetchSingleFeedData} from '../../redux/slice/SingleFeed.slice';
import Feed from '../../components/feed';
import Header from '../../components/header';
import Loading from '../../components/loading';
import Comment from '../../components/comment';
import {fetchCommentData} from '../../redux/slice/CommentsList.slice';
import {createCommentData} from '../../redux/slice/CreateComment.slice';
import Toast from '../../components/toast';

const SingleFeed = route => {
  const navigation = useNavigation();
  const slug = route?.route?.params?.slug;
  const dispatch = useAppDispatch();
  const {singleFeedData, loading} = useAppSelector(getSingleFeedData);
  const {commentList} = useAppSelector(getCommentData);
  const {commentData} = useAppSelector(postCommentData);
  const {loginData} = useAppSelector(login);

  const [comment, setComment] = useState('');
  const [showToast, setShowToast] = useState(false);

  useFocusEffect(
    useCallback(() => {
      fetchFeed();
      fetchComment();
      return () => {};
    }, []),
  );

  const fetchFeed = () => {
    dispatch(fetchSingleFeedData(slug));
  };

  const fetchComment = () => {
    dispatch(fetchCommentData(slug));
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  const commentPost = () => {
    const data = {
      slug: slug,
      comment: {body: comment},
      token: loginData?.user?.token,
    };
    dispatch(createCommentData(data));
    setComment('');
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1000);
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <Header
        headerTitle={singleFeedData?.title}
        isShowBack={true}
        onBackPress={onBackPress}
        isLogin={loginData?.user ? true : false}
        userName={loginData?.user?.username}
      />
      <View style={commonStyle.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Feed
            imageUri={singleFeedData?.author?.image}
            authorName={singleFeedData?.author?.username}
            createdAt={singleFeedData?.createdAt}
            favCount={singleFeedData?.favoritesCount}
            description={singleFeedData?.description}
            feedTitle={singleFeedData?.title}
            body={singleFeedData?.body}
            activeOpacity={1}
            tagData={singleFeedData?.tagList}
            onSendPress={commentPost}
            commentValue={comment}
            onCommentChange={setComment}
            children={
              <Comment
                imageUri={singleFeedData?.author?.image}
                commenterName={singleFeedData?.author?.username}
                comment={singleFeedData?.description}
              />
            }
          />
        </ScrollView>
        {showToast && <Toast />}
      </View>
    </>
  );
};

export default SingleFeed;
