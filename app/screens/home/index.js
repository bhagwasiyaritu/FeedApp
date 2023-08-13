import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {commonStyle} from '../../util/commonStyles';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getFeedData} from '../../redux/selectors';
import {fetchFeedData} from '../../redux/slice/FeedData.slice';
import {useFocusEffect} from '@react-navigation/native';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import Header from '../../components/header';
import {strings} from '../../util/strings';

const Home = () => {
  const dispatch = useAppDispatch();
  const {feedData} = useAppSelector(getFeedData);

  console.log('From Home', feedData);

  useFocusEffect(
    useCallback(() => {
      fatchFeed();
      return () => {};
    }, []),
  );

  const fatchFeed = () => {
    dispatch(fetchFeedData());
  };

  return (
    <>
      <Header headerTitle={strings.feedApp} />
      <View style={commonStyle.container}>
        <Text>Home</Text>
      </View>
    </>
  );
};

export default Home;
