// import React, { useState, useEffect } from 'react'
// import { View, Platform, Text, Dimensions, Alert } from 'react-native'
// import Button from './Button'
// import { getUserInfo } from './services/api/auth/authApi';
// import { connectWithWs, sendMessageToWs } from './services/genericSocket'



// const Lobby = ({ goToGameCallback, mobileUser, listPlayers }) => {
//     const [state, setState] = useState({
//         dataFromServer: undefined,
//         user: undefined
//     })

//     console.log("Dimmi qualcosa di scemo: ", listPlayers)

//     useEffect(() => {
//         userInfo()
//     }, [state.dataFromServer])
//     const openConnection = async () => {
//         socket.onopen = (e) => {
//             if (Platform.OS !== 'web') {
//                 console.log("Mi sono appena connesso yuhuu");
//             }

//         }
//     }
//     const userInfo = async () => {
//         console.log('sono qua dentro userinfolobby', mobileUser)
//         // let userData = Platform.OS === 'web' ? await getStorage('user') : mobileUser
//         let userData = mobileUser
//         let response;
//         console.log('userdata from props', mobileUser)
//         if (Platform.OS !== 'web' && userData !== undefined) {
//             response = await getUserInfo(userData.id)
//         } else {
//             return
//         }

//         const message = {
//             user_id: response.data.id,
//             method: "connectLobby"
//         }
//         connectWithWs(message)

//         // socket.onopen = async (e) => {
//         //     if (Platform.OS !== 'web') {
//         //         console.log("Mi sono appena connesso yuhuu");
//         //     }

//         // }
//         console.log('dopo connect')

//         socket.onmessage = function (event) {
//             console.log('onmessage connect')

//             let newState = Object.assign({}, state)

//             console.log("Evento nell'onMessage: ", event.data);
//             const obj = JSON.parse(event.data);
//             newState.dataFromServer = obj;
//             newState.user = response.data.id
//             // if (obj.hasOwnProperty("idLobby")) {
//             //     lobby = obj;
//             // } 
//             // else {
//             //     if (match == null) {
//             //         match = obj;
//             //         setTimeout(() => {
//             //             const message = {
//             //                 user_id: response.data.id,
//             //                 method: "requestCard"
//             //             }
//             //             requestCard(message);

//             //         }, 1000);
//             //     } else {
//             //         match = obj;
//             //     }
//             // }
//             setState(newState)

//             // }
//         }


//         const message = {
//             user_id: response.data.id,
//             method: "connectLobby"
//         }
//         sendMessageToWs(message)
//         // randomCallback(response.data)

//         // user = userMobileId
//     }

//     const startGame = () => {
//         goToGameCallback()
//     }

//     const renderPlayer = (player, key) => {
//         return (
//             <View key={key} style={{ borderColor: '#fff', borderBottomWidth: 2, padding: 10, backgroundColor: '#4F8CAB' }}>
//                 <Text style={{ color: '#fff', fontWeight: 'bold' }}>
//                     {player.username} | {player.score}pts
//                 </Text>
//             </View>
//         )
//     }
//     return (

//         <View style={{ backgroundColor: '#61B5D9', height: Dimensions.get('screen').height, paddingVertical: 20 }}>
//             {
//                 !state.dataFromServer &&
//                 <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 36, color: '#fff' }}>EMPTY LOBBY</Text>
//             }
//             {
//                 state.dataFromServer &&
//                 <View>
//                     <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 36, color: '#fff', marginBottom: 10 }}>LOBBY PLAYERS : {state.dataFromServer.users.length}</Text>
//                     {state.dataFromServer.users?.map(renderPlayer)}

//                     {
//                         ((state.dataFromServer.users?.length > 1) && (state.user == state.dataFromServer.users[0].id)) &&
//                         <View style={{ alignItems: 'center', marginTop: 10 }}>
//                             <Button styleCustom={{ width: 100, backgroundColor: '#4F8CAB', alignItems: 'center', padding: 10, borderRadius: 5 }} label='START' in callback={startGame} />
//                         </View>

//                     }

//                 </View>

//             }
//         </View>



//     )
// }

// export default Lobby

import React, { useState, useEffect } from "react";
import { View, Text, Dimensions } from 'react-native-web'
import Button from "./Button";
import { createLobby } from "./services/api/lobby/lobbyApi";
var WS = new WebSocket("ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws");
let lobby;
let connectionEstablished;

const Lobby = ({ mobileUser }) => {
    const [state, setState] = useState({
        dataFromServer: undefined
    })
    useEffect(() => {
        WS.onmessage = (event) => {
            console.log('onmessage', JSON.parse(event.data));
            // eventEmit('lobby', event.data)
            // lobby = JSON.parse(event.data)
        }
        createLobby('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2ZWdldGFAZ21haWwuY29tIiwicm9sZXMiOlsiVVNFUiJdLCJpYXQiOjE2NTY2OTAzMzgsImV4cCI6MTY1NjY5MzkzOH0.Z55OFeEkwfhSbiMPGfdlVjFmmTJS_e3sngKNT7htk2M').then((response) => {
            // let response = await createLobby(mobileUser.token)
            console.log('response.data',response.data)
            lobby = response.data;
            WS.onopen = () => {
                console.log("CONNECTED");
            }
            connectionEstablished = false;
            setTimeout(() => {
                if (lobby != null && WS != null) {
                    const message = {
                        user_id: mobileUser,
                        method: "connectLobby"
                    }
                    sendMessage(message);
                    connectionEstablished = true;
                }
            }, 1000);
        })



    }, [WS.onmessage])

    const sendMessage = (message) => {
        WS.send(JSON.stringify(message));
    }

    const createL = async () => {
        let response = await createLobby('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2ZWdldGFAZ21haWwuY29tIiwicm9sZXMiOlsiVVNFUiJdLCJpYXQiOjE2NTY2OTAzMzgsImV4cCI6MTY1NjY5MzkzOH0.Z55OFeEkwfhSbiMPGfdlVjFmmTJS_e3sngKNT7htk2M')

        // let response = await createLobby(mobileUser.token)
        lobby = response.data;
        WS.onopen = () => {
            console.log("CONNECTED");
        }
        connectionEstablished = false;
        setTimeout(() => {
            if (lobby != null && WS != null) {
                const message = {
                    user_id: mobileUser,
                    method: "connectLobby"
                }
                sendMessage(message);
                connectionEstablished = true;
            }
        }, 1000);
    }
    return (

        <View style={{ backgroundColor: '#61B5D9', height: Dimensions.get('screen').height, paddingVertical: 20 }}>
            {
                !state.dataFromServer &&
                <>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 36, color: '#fff' }}>EMPTY LOBBY</Text>
                    <Button label="crea lobby" callback={createL} />
                </>

            }
            {
                state.dataFromServer &&
                <View>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 36, color: '#fff', marginBottom: 10 }}>LOBBY PLAYERS : {state.dataFromServer.users.length}</Text>
                    {/* {state.dataFromServer.users?.map(renderPlayer)} */}

                    {
                        ((state.dataFromServer.users?.length > 1) && (state.user == state.dataFromServer.users[0].id)) &&
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            {/* <Button styleCustom={{ width: 100, backgroundColor: '#4F8CAB', alignItems: 'center', padding: 10, borderRadius: 5 }} label='START' in callback={startGame} /> */}
                        </View>

                    }

                </View>

            }
        </View>


    )
}

export default Lobby