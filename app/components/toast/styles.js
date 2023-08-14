import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: 50,
    height: 25,
    padding: 4,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    position:'absolute',
    bottom:20
  },
  text: {
    color: colors.white,
    fontSize: 12,
    textAlign:'center'
  },
});
