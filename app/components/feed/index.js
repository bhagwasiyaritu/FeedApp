import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {commonStyle} from '../../util/commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '../inputs';
import { strings } from '../../util/strings';

const Feed = ({imageUri, authorName, createdAt, description}) => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={commonStyle.row}>
        <Image source={{uri: imageUri}} style={styles.authorImage} />
        <View style={commonStyle.row}>
          <Text numberOfLines={1} style={styles.authorName}>
            {authorName}
          </Text>
          <Text numberOfLines={1} style={styles.createdAt}>
            {createdAt}
          </Text>
        </View>
      </TouchableOpacity>
      <Text style={{marginVertical: 12}}>{description}</Text>
      <View style={[commonStyle.row, {marginVertical: 12}]}>
        <TouchableOpacity>
          <Icon name="heart" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal: 20}}>
          <Icon name="comment" size={20} />
        </TouchableOpacity>
      </View>
      <View style={commonStyle.row}>
        <TouchableOpacity style={styles.userContainer}>
          <Icon name="user" size={20} />
        </TouchableOpacity>
        <Input style={styles.commentInput} placeholderText={strings.commentOnThis}/>
      </View>
    </View>
  );
};

export default Feed;
