import React, { useState, useEffect } from 'react'
import { View, Platform, Text, Dimensions } from 'react-native'
import Button from './Button'
import { getUserInfo } from './services/api/auth/authApi'

//WebSocket
import { connectWithWs, sendMessageToWs } from './services/genericSocket'


let lobby;
let match;
const Lobby = ({ goToGameCallback, mobileUser }) => {
    const [state, setState] = useState({
        dataFromServer: null,
        user: undefined
    })

    useEffect(() => {
        userInfo()
    }, [])

    const userInfo = async () => {
        console.log('sono qua dentro userinfolobby', mobileUser)
        // let userData = Platform.OS === 'web' ? await getStorage('user') : mobileUser
        let userData = mobileUser
        let response;
        console.log('userdata from props', mobileUser)
        if (Platform.OS !== 'web' && userData !== undefined) {
            response = await getUserInfo(userData.id)
        } else {
            return
        }

        connectWithWs()
        console.log('dopo connect')


        socket.onmessage = function (event) {
            let newState = Object.assign({}, state)

            console.log(event.data);
            const obj = JSON.parse(event.data);
            newState.dataFromServer = obj;
            newState.user = response.data.id
            // if (obj.hasOwnProperty("idLobby")) {
            //     lobby = obj;
            // } 
            // else {
            //     if (match == null) {
            //         match = obj;
            //         setTimeout(() => {
            //             const message = {
            //                 user_id: response.data.id,
            //                 method: "requestCard"
            //             }
            //             requestCard(message);

            //         }, 1000);
            //     } else {
            //         match = obj;
            //     }
            // }
            setState(newState)

            // }
        }
        const message = {
            user_id: response.data.id,
            method: "connectLobby"
        }
        sendMessageToWs(message)



        // randomCallback(response.data)

        // user = userMobileId
    }

    const startGame = async () => {
        goToGameCallback()
    }
    const renderPlayer = (player, key) => {
        return (
            <View key={key} style={{ borderColor: '#fff', borderBottomWidth: 2, padding: 10, backgroundColor: '#4F8CAB' }}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                    {player.username} | {player.points}pts
                </Text>
            </View>
        )
    }
    return (

        <View style={{ backgroundColor: '#61B5D9', height: Dimensions.get('screen').height, paddingVertical: 20 }}>
            {
                !state.dataFromServer &&
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 36, color: '#fff' }}>EMPTY LOBBY</Text>
            }
            {
                state.dataFromServer &&
                <View>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 36, color: '#fff', marginBottom: 10 }}>LOBBY PLAYERS : {state.dataFromServer.users.length}</Text>
                    {state.dataFromServer.users?.map(renderPlayer)}

                    {
                        ((state.dataFromServer.users?.length > 1) && (state.user == state.dataFromServer.users[0].id)) &&
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
