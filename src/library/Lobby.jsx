import React, { useState, useEffect } from 'react'
import { View, Platform } from 'react-native'
import Button from './Button'
//AsyncStorage
import { getStorage } from './utils/asyncStorage'

import { createLobby, deleteLobby, randomLobby } from './services/api/lobby/lobbyApi'

//WebSocket
import { connectWithWs, sendMessageToWs, listenToWs, closeConnectionWithWs } from './services/genericSocket'


const Lobby = ({ createCallback, randomCallback, randomCallbackMobile, createCallbackMobile, Children }) => {

    const [state, setState] = useState({
        isConnected: false,
        dataFromServer: null
    })

    useEffect(() => {
        // let newState = Object.assign({}, state)
        if (state.isConnected) {
            console.log("sono connesso")
            listenToWs()
        }

 /*        return () => {
            closeConnectionWithWs()
        } */

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
        sendMessageToWs("Speriamo si zi")
    }

    const connect = () => {
        connectWithWs()
        setState({
            ...state,
            isConnected: true
        })
    }

    const closeConnection = () => {
        closeConnectionWithWs()
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
