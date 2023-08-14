import {StyleSheet} from 'react-native';
import { colors } from './colors';

export const commonStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:colors.white
  },
  row:{
    flexDirection:'row',
    alignItems:'center'
  },
  error:{
    color:colors.errorRed,
    fontSize:12,
    marginVertical:12
  }
});