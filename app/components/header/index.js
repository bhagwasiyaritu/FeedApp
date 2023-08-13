import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../util/colors';
import {commonStyle} from '../../util/commonStyles';

const Header = ({headerTitle, onUserIconClick}) => {
  return (
    <View style={[commonStyle.row, styles.container]}>
      <TouchableOpacity>
        <Icon name="arrow-left" color={colors.white} size={15} />
      </TouchableOpacity>
      <Text style={styles.text}>{headerTitle}</Text>
      <TouchableOpacity onPress={onUserIconClick}>
        <Icon name="user" color={colors.white} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
