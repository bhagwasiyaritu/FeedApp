import {View, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {commonStyle} from '../../util/commonStyles';
import ReadMore from '@fawazahmed/react-native-read-more';

const Comment = ({imageUri, commenterName, comment}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[commonStyle.row, {alignItems: 'flex-start'}]}>
        <Image source={{uri: imageUri}} style={styles.imageUri} />
        <View style={{flex:1}}>
          <Text numberOfLines={1} style={styles.commenterName}>
            {commenterName}
          </Text>
          <ReadMore numberOfLines={3} style={styles.textStyle}>
            {comment}
          </ReadMore>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Comment;
