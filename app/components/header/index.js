import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Header = ({headerTitle}) => {
  return (
    <View style={styles.container}>
      <Text>{headerTitle}</Text>
    </View>
  );
};

export default Header;
