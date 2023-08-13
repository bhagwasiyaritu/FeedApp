import {StyleSheet} from 'react-native';
import { colors } from '../../util/colors';

export const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:colors.primary,
        fontSize:20,
        fontWeight:'bold',
        marginVertical:24
    }
});
