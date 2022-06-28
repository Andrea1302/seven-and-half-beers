import React, { useState, useEffect } from 'react'
import { View, Platform } from 'react-native'
import Button from './Button'
//AsyncStorage
import { getStorage } from './utils/asyncStorage'

import { createLobby, deleteLobby, randomLobby } from './services/api/lobby/lobbyApi'

// import {onOpenSocket,onSendMessage} from './services/genericSocket'
let ws;
const Lobby = ({ createCallback, randomCallback, randomCallbackMobile, createCallbackMobile, Children }) => {

    const [state, setState] = useState({
        isConnected: false,
        dataFromServer: null
    })
    useEffect(() => {
        // let newState = Object.assign({}, state)
        if (state.isConnected) {
            ws.onmessage = function (event) {

                console.log("Message received..." + event.data);
                // newState.dataFromServer = event.data
            };
            return () => ws.close();
        }
        // setState(newState)

    }, [state.isConnected])

    const random = async () => {
        if (Platform.OS === 'web') {
            let user = await getStorage('user')
            let response = await randomLobby(user?.token)
            randomCallback(response.data)
        } else {
            randomCallbackMobile()
        }
    }
    const create = async () => {
        if (Platform.OS === 'web') {
            let user = await getStorage('user')
            console.log('user', user)
            // let response = await createLobby(user?.token)
            // console.log(response.data)
            // onOpenSocket()
            // createCallback(response.data)

        } else {
            createCallbackMobile()
        }
    }
    const send = () => {
        ws.send("Speriamo bene");
    }
    const connect = () => {
        ws = new WebSocket("wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self");

        ws.onopen = function () {
            ws.send("Hi, from the client."); // this works
            alert("Connection opened...");
        };
        setState({
            ...state,
            isConnected: true
        })
    }

    const closeConnection = () => {
        ws.close()
        setState({
            ...state,
            isConnected: false
        })
    }
    return (
        <View>

            <Button callback={create} label="Create Lobby" />
            <Button callback={random} label="Random Lobby" />
            <Button callback={send} label="send" />
            <Button callback={connect} label="connettiti" />
            <Button callback={closeConnection} label="close" />



            {Children}
        </View>
    )
}

export default Lobby
