import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";

const image = require('../../../assets/splash_image.png');


const Splash = () => {
    return (

        <View style= {styles.container}>
            <Image style={styles.image} source={image} />

            <View style={styles.titleContainer}>
            <Text style = {styles.title}>You'll find </Text>
            <Text style ={styles.innertitle}> All you need</Text>
            <Text style = {styles.title}> Here ! </Text>
            </View>
           
            <Button title="Sign in" onPress={console.log("yes yes..")}/>
            <Pressable  hitSlop={24}>
                <Text style = {styles.footerText} >Sign up</Text>
            </Pressable>
        </View>



    );
};

export default Splash