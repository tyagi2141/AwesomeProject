import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../../util/colors";


export const styles = StyleSheet.create({

    container:{
        backgroundColor:colors.blue,
        paddingHorizontal:8,
        paddingVertical:20,
        width:'100%',
        borderRadius:12

       

    },
    title:{
        color:colors.white,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
       
        
    }
})