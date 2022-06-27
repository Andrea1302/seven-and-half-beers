import React, { useEffect, useState, useRef } from "react";
import { View, ImageBackground, Image, Text, Dimensions } from 'react-native';
import Lottie from "./Lottie";
//import LottieView from 'react-native-web-lottie'

// style 
import styleGame from "./style/styleGame";

//Components
import Button from './Button'
import react from "react";


/* 
<LottieView ref={playerIcon} style={styleGame.bastardi} source={require('./assets/lotties/user.json')} loop={true} autosize={true} />
<LottieView ref={beer} style={{ height: "100%" }} source={require('./assets/lotties/beer.json')} loop={true} autosize={true} /> 
*/

const playerList = [{
    id: 112,
    username: "Sempronio",
    points: 1000,
    firstCard: 1,
    active: false,
    isDrunk: false,
    otherCards: []
}, {
    id: 222,
    username: "PotatoGnognos",
    points: 758,
    firstCard: 2,
    active: false,
    otherCards: [],
    isDrunk: false,

}, {
    id: 300,
    username: "Yugi Muto",
    points: 9999,
    firstCard: "Exodia",
    active: false,
    otherCards: [],
    isDrunk: false,

}, {
    id: 2,
    username: "Seto Kaiba",
    points: 1,
    firstCard: 6,
    active: false,
    otherCards: [],
    isDrunk: false,

}, {
    id: 59,
    username: "Mai Valentine",
    points: 69,
    firstCard: 3,
    active: false,
    otherCards: [],
    isDrunk: false,

}, {
    id: 62,
    username: "Bulma",
    points: 420,
    firstCard: 2,
    active: false,
    isDrunk: false,
    otherCards: [],
}, {
    id: 711,
    username: "Nico Robin",
    points: 0,
    firstCard: 0.5,
    active: false,
    isDrunk: false,
    otherCards: [],
}]

// const nextCard = 2

// let myId

const Game = (props) => {
    // const myRef = useRef([])

    const [state, setState] = useState({
        infoGiocatori: playerList,
        contatoreTurni: 0,
        turns: 0,
        isMyTurn: false,
    })

    //DidUpade
    useEffect(() => {
        // let newState = Object.assign({}, state)

        // if (newState.turns === 0) {
        //     Chiamata per prendere id user dallo storage
        //     myId = 59
        // }

        // if (state.infoGiocatori[state.turns].id === myId) {
        //     newState.isMyTurn = true
        // } else {
        //     newState.isMyTurn = false
        // }
        // setState(newState)

        props.callback(state)
    }, [state])

    // const renderPlayer = (player, key) => {
    //     return (
    //         // <View ref={el => myRef.current[key] = el} key={key} style={{ height: 200, width: 100, backgroundColor: state.infoGiocatori[state.turns].id === player.id ? 'yellow' : 'red' }}>
    //         <View ref={el => myRef.current[key] = el} key={key}>
    //             {React.cloneElement(props.children, { ref: myRef.current[key] })}
    //             {/* {props.children} */}

    //             <Text>
    //                 {player.username}
    //             </Text>
    //             <Text>
    //                 {player.firstCard}
    //             </Text>


    //             <>
    //                 {player.otherCards.map((card, key) => {
    //                     return (
    //                         <Text key={key}>{card}</Text>
    //                     )
    //                 })}
    //             </>

    //         </View>
    //         // </View >

    //     )
    // }



    const stop = () => {
        const lenghtPlayers = state.infoGiocatori.length
        if (state.turns === lenghtPlayers - 1) {
            alert('finiiish')
            return
        }
        setState({
            ...state,
            turns: state.turns + 1
        })
        props.stop(71)
    }

    const carta = () => {
        const newState = Object.assign({}, state)
        let arrCards = [0.5, 1, 2, 3, 4, 5, 6, 7]
        const nextCard = arrCards[Math.floor(Math.random() * (7 + 1))];
        newState.infoGiocatori[state.turns].otherCards.push(nextCard)
        let sumCard = newState.infoGiocatori[state.turns].otherCards.reduce((a, b) => a + b, newState.infoGiocatori[state.turns].firstCard)

        if (sumCard > 7.5) {
            console.log("Hai perso zi")
            // myRef.current[state.turns].style = {backgrounColor : 'green'}
            // console.log(myRef.current[state.turns])
            newState.infoGiocatori[state.turns].isDrunk = true
            stop()
            return props.addCard('gameover')

        }
        let variable;
        switch (nextCard) {
            case 0.5: {
                variable = 11.4
                break;
            }
            case 1 : {
                variable = 22.8
                break;
            }
            case 2 : {
                variable = 45.6
                break;
            }
            case 3 : {
                variable = 68.4
                break;
            }
            case 4 : {
                variable = 91.2
                break;
            }
            case 5 : {
                variable = 114
                break;
            }
            case 6 : {
                variable = 136.8
                break;
            }
            case 7 : {
                variable = 159.6
                break;
            }
            

        }
        props.addCard(variable)
    }


    return (


        <ImageBackground source={{ uri: 'https://cdn.shopify.com/s/files/1/1772/0301/products/3_47247d8e-5f77-4b71-b13c-6e1c08adb51f.png?v=1575939071' }} style={styleGame.gameTable}>

            <View style={props.styleChildren}>
                {props.children}
            </View>

            <View style={styleGame.btn}>
                <Button styleCustom={styleGame.singleBtn} label="Stop" callback={stop} />
                <Button styleCustom={styleGame.singleBtn} label="Carta" callback={carta} />
            </View>
        </ImageBackground>
    )
}

export default Game