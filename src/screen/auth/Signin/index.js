import { Text, View } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/authHeader";
import Input from "../../../components/input";
import CheckBox from "../../../components/checkbox";
import { useState } from "react";
import Button from "../../../components/Button";
import Seperator from "../../../components/saparater";
import Googlelogin from "../../../components/googlelogin";
import React from "react";

const SignIn = () => {
    const signUp = () => {
         
    }
    return (
        <View style={styles.contaainer}>
            <AuthHeader title={"Sign In"} />
            <Input placeholder={"Enter Email"} lable={"Email"} />
            <Input isPassword={true} placeholder={"Enter Password"} lable={"Password"} />
          
            <Button style = {styles.signupbtn} title={"Sign in"}/>
            <Seperator lablel={"sign In"}/>
            <Googlelogin/>
            <Text style = {styles.fottersignin} onPress={signUp}> don't have account <Text style = {styles.fottersubText}>Sign Up</Text> </Text>
        </View>
    );
}

export default React.memo(SignIn)