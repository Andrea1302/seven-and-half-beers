import React from 'react'

import { signInPostApi } from './services/api/auth/authApi';
// button 
import Button from './Button';

// components 
import { TextInput, View, ImageBackground } from 'react-native';

import styleForm from './style/styleForm'
import { setStorage } from './utils/asyncStorage';

let formObject = {
    email: '',
    password: '',
}

const Login = ({ goToRegistration, callback, imgBg, containerStyle,styleBtn,styleTextBtn }) => {

    const Login = () => {
        signInPostApi(formObject)
            .then(res => {
                // setStorage('user',res.data)
                callback(res)
            })
    }


    const handleInput = (params) => (e) => {
        formObject[params] = e
    }

    const goTo = () => {
        goToRegistration()
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
                    onChangeText={handleInput('email')}
                    placeholder="email"
                    placeholderTextColor="#ececec"

                />
                <TextInput
                    secureTextEntry={true}
                    style={styleForm.input}
                    onChangeText={handleInput('password')}
                    placeholder="password"
                    placeholderTextColor="#ececec"
                />
                <Button
                    styleCustomText={styleTextBtn} 
                    styleCustom={styleBtn}
                    callback={Login}
                    label="Login"
                />

                <Button
                    styleCustomText={styleTextBtn} 
                    styleCustom={styleBtn}
                    callback={goTo}
                    label="Go to registration"
                />
            </View >

        </ImageBackground>

    )
}

export default Login