import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex:1,
    justifyContent:'center',
  },
  text: {
    color: colors.white,
    textAlign:'center',
    fontSize:44,
    textTransform:'uppercase',
    fontWeight:'bold'
  }
});
