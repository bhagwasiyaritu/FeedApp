import {StyleSheet} from 'react-native';
import { colors } from '../../util/colors';

export const styles = StyleSheet.create({
    authorImage:{
        width:40,
        height:40,
        resizeMode:'contain',
        borderRadius:20,
        borderWidth:2,
        borderColor:colors.lightGray
    }
});