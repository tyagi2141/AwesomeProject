import { SafeAreaView, Text } from "react-native"

import React, { useState } from "react"


const Chair = (props) => {

    const {name} = props;

    const [isBig, setIsBig] = useState(false);
    console.log("onclick : ", isBig );
    console.log("Name",name)
    const changeState = () => {
        setIsBig(curruntStates => !curruntStates)
    }

    return (
        <Text style = {isBig ? {fontSize : 14} : {fontSize : 24} } onPress={changeState}>
            Inside chart name is {name}
        </Text>
    )

}

export default Chair;