import React, { useState } from 'react'

// services 
import { registerUserPostApi, signInPostApi } from './services/api/auth/authApi';

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
    userName: '',
    email: '',
    password: '',
}

const Registration = ({ callback, imgBg, containerStyle }) => {
    const [state, setState] = useState({
        errorMail: false,
        errorPassword: false
    })
    const registration = () => {
        // if (!checkMail(formObject.email)) {
        //     setState({
        //         ...state,
        //         errorMail: true
        //     })
        // }
        // if (!checkPassword(formObject.password)) {
        //     setState({
        //         ...state,
        //         errorPassword: true
        //     })
        // }

        registerUserPostApi(formObject).then(signInPostApi({
            email: formObject.email,
            password: formObject.password
        })).then(res => {
            setState({
                ...state,
                errorMail: false,
                errorPassword: false,
            })
            setStorage("token", res.data.token);
            setStorage("refreshToken", res.data.refreshToken);
            callback(res.data)
        })


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
                    onChangeText={handleInput('userName')}
                    placeholder="userName"
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
                    styleCustom={styleForm.btn}
                    styleCustomText={styleForm.textBtn}
                    callback={registration}
                    label="registration"
                />
            </View >

        </ImageBackground>

    )
}

export default Registration