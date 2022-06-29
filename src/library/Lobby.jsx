import React, { useState, useEffect } from 'react'
import { View, Platform, Text, Dimensions } from 'react-native'
import Button from './Button'
//AsyncStorage
import { getStorage } from './utils/asyncStorage';
import { getUserInfo } from './services/api/auth/authApi'

import { createLobby, deleteLobby, randomLobby } from './services/api/lobby/lobbyApi'

//WebSocket
import { connectWithWs, sendMessageToWs, listenToWs, closeConnectionWithWs } from './services/genericSocket'

import { socket } from './services/configSocket'

let userPlayer;
const Lobby = ({ userMobileId, host, startGameCallback, createCallback, randomCallback, randomCallbackMobile, createCallbackMobile }) => {

    const [state, setState] = useState({
        dataFromServer: null,
        playGame: false,
        user : undefined
    })

    useEffect(() => {
        userInfo()
    }, [])

    // const random = async () => {
    //     if (Platform.OS === 'web') {
    //         let user = await getStorage('user')
    //         let response = await randomLobby(user?.token)
    //         randomCallback(response.data)
    //     } else {
    //         randomCallbackMobile()
    //     }
    // }
    const userInfo = async () => {
        if (Platform.OS === 'web') {
            let userData = await getStorage('user')
            let response = await getUserInfo(userData.id)
            console.log(response.data)
            userPlayer = {
                "user": [
                    {
                        "id": response.data.id,
                        "username": response.data.username,
                        "email": response.data.email,
                        "password": "eb1205dfd370bc03b62c09137f7a9e98b0cf4a402652b463e286c8019138054a",
                        "score": response.data.score,
                        "token": null,
                        "refreshToken": null,
                        "online": true
                    }
                ],
                "idLobby": 16,
                "accessType": true,
                "userMax": 7,
                "usersSize": 0
            }
            connectWithWs(userPlayer)
            socket.onmessage = function (event) {
                if (event.data[0] === '{') {
                    console.log('questoo', event.data)
                    setState({
                        ...state,
                        user : response.data.id,
                        dataFromServer: JSON.parse(event.data)
                    })

                }
            }
            // randomCallback(response.data)
        }
        // user = userMobileId
    }
    // const create = async () => {
    //     if (Platform.OS === 'web') {
    //         let user = await getStorage('user')
    //         console.log('user', user)
    //         // let response = await createLobby(user?.token)
    //         // console.log(response.data)
    //         // onOpenSocket()
    //         // createCallback(response.data)

    //     } else {
    //         createCallbackMobile()
    //     }
    // }

    const send = () => {
        sendMessageToWs("Speriamo si zi")
    }

    const startGame = () => {
        startGameCallback()

    }
    const renderPlayer = (player, key) => {
        return (
            <View key={key} style={{ borderColor: '#fff', borderBottomWidth: 2, padding: 10, backgroundColor: '#4F8CAB' }}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                    {player.username} | {player.score}pts
                </Text>
            </View>
        )
    }
    return (

        <View style={{ backgroundColor: '#61B5D9', height: Dimensions.get('screen').height, paddingVertical: 20 }}>
            {/* <Button callback={create} label="Create Lobby" />
            <Button callback={random} label="Random Lobby" /> */}
            {/* <Button callback={connect} label="connettiti" /> */}
            {/* <Button callback={closeConnection} label="close" /> */}
            {
                !state.dataFromServer &&
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 36, color: '#fff' }}>EMPTY LOBBY</Text>
            }
            {
                state.dataFromServer &&
                <View>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 36, color: '#fff', marginBottom: 10 }}>LOBBY PLAYERS : {state.dataFromServer.user.length}</Text>
                    {state.dataFromServer.user.map(renderPlayer)}

                    {
                        ((state.dataFromServer.user.length > 1) && (state.user == state.dataFromServer.user[0].id)) &&
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <Button styleCustom={{ width: 100, backgroundColor: '#4F8CAB', alignItems: 'center', padding: 10, borderRadius: 5 }} label='START' in callback={startGame} />
                        </View>

                    }

                </View>

            }
        </View>



    )
}

export default Lobby
