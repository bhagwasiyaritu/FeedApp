import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  imageUri: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.lightGray,
    marginRight: 12,
  },
  commenterName: {
    color: colors.black,
    fontWeight: '700',
    marginRight: 8,
  },
  textStyle: {
    fontSize: 12,
    marginTop:8
  },
});
