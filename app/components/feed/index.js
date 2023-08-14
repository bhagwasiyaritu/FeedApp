import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {Children} from 'react';
import {styles} from './styles';
import {commonStyle} from '../../util/commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '../inputs';
import {strings} from '../../util/strings';
import {numFormatter} from '../../util/helperFuncations';
import moment from 'moment';
import {colors} from '../../util/colors';

const Feed = ({
  imageUri,
  authorName,
  createdAt,
  description,
  favCount,
  onCardPress,
  onHeartPress,
  onCommentPress,
  onSendPress,
  feedTitle,
  body,
  activeOpacity,
  tagData,
  children,
  commentValue,
  onCommentChange,
}) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={onCardPress}
      activeOpacity={activeOpacity}>
      <TouchableOpacity style={commonStyle.row}>
        <Image source={{uri: imageUri}} style={styles.authorImage} />
        <View>
          <View style={commonStyle.row}>
            <Text numberOfLines={1} style={styles.authorName}>
              {authorName}
            </Text>
            <Text numberOfLines={1} style={styles.createdAt}>
              {moment(createdAt).format('MMM Do YY')}
            </Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={tagData}
            renderItem={({item, index}) => (
              <Text style={styles.createdAt}>{`${item} ${
                tagData.length > 0 && index != tagData.length - 1 ? '|' : ''
              } `}</Text>
            )}
            keyExtractor={item => item}
          />
        </View>
      </TouchableOpacity>
      <Text numberOfLines={2} style={[styles.authorName, {marginTop: 20}]}>
        {feedTitle}
      </Text>
      <Text style={{marginVertical: 12}}>{description}</Text>
      {body && <Text style={{marginVertical: 12}}>{body}</Text>}
      <View style={[commonStyle.row, {marginVertical: 12}]}>
        <TouchableOpacity style={commonStyle.row} onPress={onHeartPress}>
          <Icon name="heart" size={20} />
          <Text style={[styles.createdAt, {marginLeft: 8}]}>
            {numFormatter(favCount)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginHorizontal: 20}}
          onPress={onCommentPress}>
          <Icon name="comment" size={20} />
        </TouchableOpacity>
      </View>
      <View style={commonStyle.row}>
        <TouchableOpacity style={styles.userContainer}>
          <Icon name="user" size={20} />
        </TouchableOpacity>
        <Input
          style={styles.commentInput}
          placeholderText={strings.commentOnThis}
          value={commentValue}
          onChage={onCommentChange}
        />
        <TouchableOpacity
          style={[
            styles.userContainer,
            {
              borderColor: commentValue.length
                ? colors.primary
                : colors.lightGray,
            },
          ]}
          onPress={onSendPress}>
          <Icon
            name="paper-plane"
            size={15}
            color={commentValue.length ? colors.primary : null}
          />
        </TouchableOpacity>
      </View>
      {children}
    </TouchableOpacity>
  );
};

export default Feed;
