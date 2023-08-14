import {StyleSheet} from 'react-native';
import { colors } from '../../util/colors';

export const styles = StyleSheet.create({
  listFooterLoader: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent:'center'
  },
  loadingText: {
    color:colors.primary,
    fontSize:12,
    marginVertical:8
  },
});
