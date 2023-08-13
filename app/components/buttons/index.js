import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { styles } from './styles';

const Button = ({btnTitle}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.btnTitle}>{btnTitle}</Text>
    </TouchableOpacity>
  );
};

export default Button;
