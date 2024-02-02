import { Image, Pressable, Text, TextInput, View } from "react-native"
import { styles } from "./styles"
import { useState } from "react"

const Input = ({ lable, placeholder, isPassword }) => {

    const [isPasswordVisible, setPasswordVisible] = useState(false)

    const onEyePress = () => {
        setPasswordVisible(!isPasswordVisible)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.lable} >{lable}</Text>
            <View style={styles.inputcontainer}>
                <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input} ></TextInput>

                {isPassword ? (
                    <Pressable onPress={onEyePress}>
                        <Image style= {styles.eye} source={require('../../assets/eye.png')} />
                    </Pressable>
                ) : null}

            </View>
        </View>
    )
}
export default Input;