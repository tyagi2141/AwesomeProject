import { StyleSheet } from "react-native";
import { colors } from "../../util/colors";

export const styles = StyleSheet.create({
    container:{},
    lable:{
        color:colors.blue,
        marginVertical:8,
        fontWeight:'500',
        fontSize:15
    },
    inputcontainer:{
        borderWidth:0.5,
        borderRadius:16,
        borderColor:colors.grey,
        flexDirection:'row',
        alignItems:'center'
       
        
    },
    input:{
        paddingHorizontal:16,
        paddingVertical:20,
        flex:1
    },
    eye:{
        width:24,
        height:24,
        marginHorizontal:16
    }
})