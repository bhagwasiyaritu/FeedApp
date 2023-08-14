import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import React, {useCallback, useState} from 'react';
import {commonStyle} from '../../util/commonStyles';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getFeedData, login} from '../../redux/selectors';
import {fetchFeedData} from '../../redux/slice/FeedData.slice';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import Header from '../../components/header';
import {strings} from '../../util/strings';
import Feed from '../../components/feed';
import {routes} from '../../util/routes';
import {colors} from '../../util/colors';
import {styles} from './styles';
import { createCommentData } from '../../redux/slice/CreateComment.slice';
import Toast from '../../components/toast';

const Home = () => {
  const dispatch = useAppDispatch();
  const naviagtion = useNavigation();
  const {feedData, loading} = useAppSelector(getFeedData);
  const {loginData} = useAppSelector(login);
  const [page, setPage] = useState(1);
  const [showToast, setShowToast] = useState(false);

  useFocusEffect(
    useCallback(() => {
      fatchFeed();
      return () => {};
    }, [page]),
  );

  const fatchFeed = () => {
    dispatch(fetchFeedData(page));
  };

  const navigateToLogin = () => {
    naviagtion.navigate(routes.login);
  };

  const navigateToSingleFeed = slug => {
    if (loginData?.user) {
      naviagtion.navigate(routes.singleFeed, {slug: slug});
    } else {
      navigateToLogin();
    }
  };

  const onCommentPress = () => {
    if (loginData?.user) {
    } else {
      navigateToLogin();
    }
  };

  const onHeartPress = () => {
    if (loginData?.user) {
    } else {
      navigateToLogin();
    }
  };

  const onSendPress = (slug, comment) => {
    if (loginData?.user) {
      const data = {
        slug: slug,
        comment: {body: comment},
        token: loginData?.user?.token,
      };
      dispatch(createCommentData(data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 1000);
    } else {
      navigateToLogin();
    }
  };

  const renderLoader = () => {
    return (
      <View style={styles.listFooterLoader}>
        <ActivityIndicator color={colors.primary} size={'small'} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  };

  const RenderItem = ({item}) => {
    const [comment, setComment] = useState('');
    return (
      <Feed
        imageUri={item?.author?.image}
        authorName={item?.author?.username}
        createdAt={item?.createdAt}
        description={item?.description}
        favCount={item?.favoritesCount}
        onCardPress={() => navigateToSingleFeed(item?.slug)}
        onCommentPress={onCommentPress}
        onHeartPress={onHeartPress}
        onSendPress={() => onSendPress(item?.slug, comment)}
        feedTitle={item?.title}
        tagData={item?.tagList}
        commentValue={comment}
        onCommentChange={setComment}
      />
    );
  };

  const loadMoreFeed = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Header
        isLogin={loginData?.user ? true : false}
        userName={loginData?.user?.username}
        headerTitle={strings.feedApp}
        onUserIconClick={() => naviagtion.navigate(routes.login)}
        isShowBack={false}
      />
      <View style={commonStyle.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={feedData}
          renderItem={({item}) => <RenderItem item={item} />}
          keyExtractor={item => item?.slug}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreFeed}
          onEndReachedThreshold={0}
        />
        {showToast && <Toast />}
      </View>
    </>
  );
};

export default Home;
