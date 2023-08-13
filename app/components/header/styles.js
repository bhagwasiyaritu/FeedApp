import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 60,
    paddingHorizontal: 20,
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
    flex:1
  },
});
