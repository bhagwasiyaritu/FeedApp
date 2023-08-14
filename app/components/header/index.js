import {View, Text, TouchableOpacity, Platform} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../util/colors';
import {commonStyle} from '../../util/commonStyles';

const Header = ({
  headerTitle,
  onUserIconClick,
  isLogin,
  userName,
  onBackPress,
  isShowBack,
}) => {
  return (
    <View
      style={[
        commonStyle.row,
        styles.container,
        {marginTop: Platform.OS == 'android' ? 30 : 0},
      ]}>
      {isShowBack && (
        <TouchableOpacity onPress={onBackPress}>
          <Icon name="arrow-left" size={20} color={colors.white} />
        </TouchableOpacity>
      )}
      <Text style={styles.text} numberOfLines={1}>
        {headerTitle}
      </Text>
      <TouchableOpacity
        onPress={onUserIconClick}>
        {isLogin ? (
          <Text style={[styles.text, {marginTop: 20}]}>{userName}</Text>
        ) : (
          <Icon name="user" color={colors.white} size={20} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
