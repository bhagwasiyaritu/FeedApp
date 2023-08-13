import {View, Text, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {commonStyle} from '../../util/commonStyles';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getFeedData} from '../../redux/selectors';
import {fetchFeedData} from '../../redux/slice/FeedData.slice';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import Header from '../../components/header';
import {strings} from '../../util/strings';
import Feed from '../../components/feed';
import {routes} from '../../util/routes';

const Home = () => {
  const dispatch = useAppDispatch();
  const naviagtion = useNavigation();
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
      <Header
        headerTitle={strings.feedApp}
        onUserIconClick={() => naviagtion.navigate(routes.login)}
      />
      <View style={commonStyle.container}>
        <FlatList
          data={feedData}
          renderItem={({item}) => (
            <Feed
              imageUri={item?.author?.image}
              authorName={item?.author?.username}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

export default Home;
