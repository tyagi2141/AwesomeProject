import { Text, View } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/authHeader";
import Input from "../../../components/input";
import CheckBox from "../../../components/checkbox";
import { useState } from "react";
import Button from "../../../components/Button";
import Seperator from "../../../components/saparater";
import Googlelogin from "../../../components/googlelogin";

const Signup = () => {
    const [cheked, setCheck] = useState(false)
    const signIn = () => {
         
    }
    return (
        <View style={styles.contaainer}>
            <AuthHeader title={"Sign up"} />
            <Input placeholder={"Enter name"} lable={"Name"} />
            <Input placeholder={"Enter Email"} lable={"Email"} />
            <Input isPassword={true} placeholder={"Enter Password"} lable={"Password"} />
            <View style = {styles.agreeRow}>
                <CheckBox checked={cheked} onCheck={setCheck} />
                <Text style = {styles.agreeText}>I agree with Terms & Privacy </Text>
            </View>
            <Button style = {styles.signupbtn} title={"Sign up"}/>
            <Seperator lablel={"sign in"}/>
            <Googlelogin/>
            <Text style = {styles.fottersignin} onPress={signIn}> Already have account <Text style = {styles.fottersubText}>Sign In</Text> </Text>
        </View>
    );
}

export default Signup