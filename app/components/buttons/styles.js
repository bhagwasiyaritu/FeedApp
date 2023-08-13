import { StyleSheet} from 'react-native'
import { colors } from '../../util/colors'

 export const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        borderRadius:8,
        padding:12,
        marginVertical:12
    },
    btnTitle:{
        color:colors.white,
        textAlign:'center',
        textTransform:'uppercase',
        fontWeight:'bold'
    }
 })