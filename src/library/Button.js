import React from "react";
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from "prop-types";
const Button = ({ callback, label, styleCustom, styleCustomText }) => {
    const onPress = () => {
        callback()
    }
    return (
        <TouchableOpacity style={styleCustom} onPress={onPress} >
            <Text style={styleCustomText}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}
Button.defaultProps = {
    styleCustom: {
        backgroundColor:'#4F8CAB',
        padding : 10,
        margin: 10,
        borderRadius: 10,
        minWidth : 100,
        alignItems: 'center'
    },
    styleCustomText: {
        color : '#ececec',
        fontWeight : 'bold'
    }
}

// propTypes 
Button.propTypes = {
    styleBtn: PropTypes.string 
}
export default Button