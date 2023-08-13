import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {commonStyle} from '../../util/commonStyles';

const Feed = ({imageUri, authorName}) => {
  return (
    <View>
      <TouchableOpacity style={commonStyle.row}>
        <Image source={{uri: imageUri}} style={styles.authorImage} />
        <View>
          <Text>{authorName}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Feed;
