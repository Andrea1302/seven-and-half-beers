import React, { useState } from 'react'

// services 
import { getUserInfo, registerUserPostApi, signInPostApi } from './services/api/auth/authApi';

// custom components 
import Button from './Button';

// components 
import { TextInput, View, ImageBackground } from 'react-native';

// storage 
import { setStorage } from './utils/asyncStorage';

// style 
import styleForm from './style/styleForm';

// utils 
import { checkMail, checkPassword } from './utils/validation'

let formObject = {
    username: '',
    email: '',
    password: '',
}

const Registration = ({ callback, imgBg, containerStyle, styleBtn, styleTextBtn }) => {
    const [state, setState] = useState({
        errorMail: false,
        errorPassword: false
    })
    const registration = async () => {
        let responseRegistration = await registerUserPostApi(formObject)
        let responseLogin;
        if (responseRegistration) {
            responseLogin = await signInPostApi({
                email: formObject.email,
                password: formObject.password
            })

        }
        let responseUser = await getUserInfo(responseLogin.data?.id)
        callback(responseUser, responseLogin)
    }
    const handleInput = (params) => (e) => {
        formObject[params] = e
    }
    return (
        <ImageBackground
            source={{ uri: 'https://img.freepik.com/free-vector/beer-with-bubbles-foam-background_107791-2563.jpg?w=2000' }}
            style={[styleForm.bgDefault, imgBg]}
            resizeMode="cover"
        >
            <View style={[styleForm.container, containerStyle]}>

                <TextInput
                    style={styleForm.input}
                    onChangeText={handleInput('username')}
                    placeholder="username"
                    placeholderTextColor="#ececec"
                />
                <TextInput
                    style={[styleForm.input, state.errorMail ? styleForm.errorInput : '']}
                    onChangeText={handleInput('email')}
                    placeholder="email"
                    placeholderTextColor="#ececec"

                />
                <TextInput
                    secureTextEntry={true}
                    style={[styleForm.input, state.errorPassword ? styleForm.errorInput : '']}
                    onChangeText={handleInput('password')}
                    placeholder="password"
                    placeholderTextColor="#ececec"
                />
                <Button
                    styleCustom={styleBtn}
                    styleCustomText={styleTextBtn}
                    callback={registration}
                    label="registration"
                />
            </View >

        </ImageBackground>

    )
}

export default Registration