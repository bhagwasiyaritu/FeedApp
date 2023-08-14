import {View, Text, ScrollView} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {commonStyle} from '../../util/commonStyles';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getSingleFeedData} from '../../redux/selectors';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {fetchSingleFeedData} from '../../redux/slice/SingleFeed.slice';
import Feed from '../../components/feed';
import Header from '../../components/header';
import Loading from '../../components/loading';

const SingleFeed = route => {
  const navigation = useNavigation();
  const slug = route?.route?.params?.slug;
  const dispatch = useAppDispatch();
  const {singleFeedData, loading} = useAppSelector(getSingleFeedData);

  console.log('Check from single feed page', singleFeedData);

  useFocusEffect(
    useCallback(() => {
      fetchFeed();
      return () => {};
    }, []),
  );

  const fetchFeed = () => {
    dispatch(fetchSingleFeedData(slug));
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <Header
        headerTitle={singleFeedData?.title}
        isShowBack={true}
        onBackPress={onBackPress}
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
          />
        </ScrollView>
      </View>
    </>
  );
};

export default SingleFeed;
