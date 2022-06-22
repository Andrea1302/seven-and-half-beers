import React from "react";
import { TouchableOpacity, Text } from 'react-native'

const Button = ({ callback, label, styleCustom, styleCustomText }) => {
    const onPress = () => {
        callback()
    }
    return (
        <TouchableOpacity style={{backgroundColor:'blue'}} onPress={onPress} >
            <Text style={styleCustomText}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default Button