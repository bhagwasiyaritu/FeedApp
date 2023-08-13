import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    marginVertical: 12,
    marginHorizontal: 1,
    borderRadius: 8,
    padding: 12,
    backgroundColor: colors.white,
  },
  authorImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.lightGray,
    marginRight: 12,
  },
  authorName: {
    color: colors.black,
    fontWeight: '700',
    marginRight: 8,
  },
  createdAt: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  userContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: colors.lightGray,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentInput:{
    flex:1,
    padding:4,
    marginLeft:12
  }
});
