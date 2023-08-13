import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {colors} from '../../util/colors';
import { styles } from './styles';
import { commonStyle } from '../../util/commonStyles';

const Loading = () => {
  return (
    <View style={[styles.container,commonStyle.container]}>
      <ActivityIndicator color={colors.primary} size={'large'} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;
