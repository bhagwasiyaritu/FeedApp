import {Text, View} from 'react-native';
import React from 'react';
import {strings} from '../../util/strings';
import { styles } from './styles';

const Toast = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{strings.done}</Text>
    </View>
  );
};

export default Toast;
