import {Text, TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors} from '../../util/colors';

const Input = ({
  placeholderText,
  numberOfLines,
  value,
  onChage,
  secureTextEntry,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChage}
      placeholder={placeholderText}
      numberOfLines={numberOfLines}
      style={[styles.input, {borderColor: colors.lightGray}]}
      placeholderTextColor={colors.lightGray}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;
