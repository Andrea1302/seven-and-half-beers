import React, { useEffect, useState } from "react";
import { View, ImageBackground, Platform } from 'react-native';

import { socket } from './services/configSocket'
import { endMatch, sendMessageToWs } from './services/genericSocket'
// style 
import styleGame from "./style/styleGame";

//Components
import Button from './Button'
import { getUserInfo } from './services/api/auth/authApi'

// let myId
const Game = (props) => {
    // const myRef = useRef([])
    const myId = props.myIdProp

    const [state, setState] = useState({
        infoGiocatori: undefined,
        isMyTurn: false,
        myId: undefined

    })

    //DidUpade
    useEffect(() => {
        if (Platform.OS !== 'web') {
            props.callback(state)
        }
    }, [state])

    useEffect(() => {
        userInfo()
    }, [])

    const userInfo = async () => {
        let response = await getUserInfo(myId)
        socket.onmessage = function (event) {
            if (event.data[0] === '{') {
                let isMyTurnVar = false;
                let data = JSON.parse(event.data)
                data.hands.forEach((userNow) => {
                    console.log('user:', userNow, 'user.id', userNow.user.id, 'responseData', response.data.id, 'turns', userNow.turn)
                    if ((userNow.user.id === response.data.id) && (userNow.turn)) {
                        isMyTurnVar = true
                    }
                })
                console.log(isMyTurnVar)

                setState({
                    ...state,
                    isMyTurn: isMyTurnVar,
                    user: response.data.id,
                    infoGiocatori: JSON.parse(event.data)
                })

            }
        }
        const message = {
            user_id: myId,
            method: "startMatch"
        }
        sendMessageToWs(message);
    }
    const stop = () => {
        const message = {
            user_id: myId,
            method: "stopPlaying"
        }
        sendMessageToWs(message);
        setTimeout(() => {
            endMatch(myId);
        }, 100);
    }

    const carta = () => {
        const newState = Object.assign({}, state)
        const message = {
            user_id: myId,
            method: "requestCard"
        }
        requestCard(message);
        // let arrCards = [0.5, 1, 2, 3, 4, 5, 6, 7]
        // const nextCard = arrCards[Math.floor(Math.random() * (7 + 1))];
        // newState.infoGiocatori.user[state.turns].otherCards = newState.infoGiocatori.user[state.turns].otherCards + nextCard
        // let sumCard = newState.infoGiocatori.user[state.turns].otherCards + newState.infoGiocatori.user[state.turns].firstCard

        // if (sumCard > 7.5) {
        //     console.log("Hai perso zi")
        //     // myRef.current[state.turns].style = {backgrounColor : 'green'}
        //     // console.log(myRef.current[state.turns])
        //     newState.infoGiocatori.user[state.turns].isDrunk = true
        //     stop()
        //     return props.addCard('gameover')

        // }
        // let variable;
        // switch (nextCard) {
        //     case 0.5: {
        //         variable = 11.4
        //         break;
        //     }
        //     case 1: {
        //         variable = 22.8
        //         break;
        //     }
        //     case 2: {
        //         variable = 45.6
        //         break;
        //     }
        //     case 3: {
        //         variable = 68.4
        //         break;
        //     }
        //     case 4: {
        //         variable = 91.2
        //         break;
        //     }
        //     case 5: {
        //         variable = 114
        //         break;
        //     }
        //     case 6: {
        //         variable = 136.8
        //         break;
        //     }
        //     case 7: {
        //         variable = 159.6
        //         break;
        //     }


        // }
        // props.addCard(variable)
        setState(newState)
    }


    return (


        <ImageBackground source={{ uri: 'https://cdn.shopify.com/s/files/1/1772/0301/products/3_47247d8e-5f77-4b71-b13c-6e1c08adb51f.png?v=1575939071' }} style={styleGame.gameTable}>

            <View style={props.styleChildren}>
                {props.children}
            </View>

            {
                state.isMyTurn &&
                <View style={styleGame.btn}>
                    <Button styleCustom={styleGame.singleBtn} label="Stop" callback={stop} />
                    <Button styleCustom={styleGame.singleBtn} label="Carta" callback={carta} />
                </View>
            }



        </ImageBackground>
    )
}

export default Game