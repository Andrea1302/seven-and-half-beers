import React from 'react'

import { signInPostApi } from './services/api/auth/authApi';
// button 
import Button from './Button';

// components 
import { TextInput, View, ImageBackground } from 'react-native';

// storage 
import { setStorage } from './utils/asyncStorage';



import styleForm from './style/styleForm'

let formObject = {
    email: '',
    password: '',
}

const Login = ({ goToRegistration, callback, imgBg, containerStyle }) => {

    const Login = () => {
        signInPostApi(formObject)
            .then(res => {
                setStorage("token", res.data.token);
                setStorage("refreshToken", res.data.refreshToken);
                callback(res.data)
            })
    }


    const handleInput = (params) => (e) => {
        formObject[params] = e
    }

    const goTo = (params) = () => {
        goToRegistration(params)
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
                    styleCustom={styleForm.btn}
                    styleCustomText={styleForm.textBtn}
                    callback={Login}
                    label="Login"
                />

                <Button
                    styleCustom={styleForm.btn}
                    styleCustomText={styleForm.textBtn}
                    callback={goTo('Registration')}
                    label="Go to registration"
                />
            </View >

        </ImageBackground>

    )
}

export default Login