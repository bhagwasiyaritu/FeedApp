import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { styles } from './styles';

const Button = ({btnTitle, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.btnTitle}>{btnTitle}</Text>
    </TouchableOpacity>
  );
};

export default Button;
