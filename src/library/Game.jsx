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

const nextCard = 2

let myId

const Game = (props) => {
    const myRef = useRef([])

    const [state, setState] = useState({
        infoGiocatori: playerList,
        contatoreTurni: 0,
        turns: 0,
        isMyTurn: false,
    })

    const playerIcon = useRef()
    const beer = useRef()

    //DidUpade
    useEffect(() => {
        let newState = Object.assign({}, state)

        if (newState.turns === 0) {
            //Chiamata per prendere id user dallo storage
            myId = 59
        }

        if (state.infoGiocatori[state.turns].id === myId) {
            newState.isMyTurn = true
        } else {
            newState.isMyTurn = false
        }
        setState(newState)
        props.callback(state)
    }, [state.turns])

    const renderPlayer = (player, key) => {
        return (
            // <View ref={el => myRef.current[key] = el} key={key} style={{ height: 200, width: 100, backgroundColor: state.infoGiocatori[state.turns].id === player.id ? 'yellow' : 'red' }}>
            <View ref={el => myRef.current[key] = el} key={key}>
                {React.cloneElement(props.children, { ref: myRef.current[key] })}
                {/* {props.children} */}

                <Text>
                    {player.username}
                </Text>
                <Text>
                    {player.firstCard}
                </Text>


                <>
                    {player.otherCards.map((card, key) => {
                        return (
                            <Text key={key}>{card}</Text>
                        )
                    })}
                </>

            </View>
            // </View >

        )
    }
    //DidUpdate
    /*  useEffect(() => {
         
         handleTurn()
     
     }, [state.contatoreTurni]) */


    // const handleTurn = () => {

    //     const newState = Object.assign({}, state)

    //     newState.infoGiocatori[state.contatoreTurni].active = true

    //     newState.infoGiocatori.forEach((player) => {
    //         if (player.active === true) {
    //             turnoId = player.id
    //         }
    //         if (turnoId === myId) {
    //             newState.isMyTurn = true
    //         } else {
    //             newState.isMyTurn = false
    //         }
    //     })
    //     console.log("Turno: ", newState.contatoreTurni)
    //     console.log("Tocca al giocatore con id:", turnoId)

    //     setState(newState)
    // }


    const stoppe = () => {
        const lenghtPlayers = state.infoGiocatori.length
        if (state.turns === lenghtPlayers - 1) {
            alert('finiiish')
            return
        }
        setState({
            ...state,
            turns: state.turns + 1
        })
        // const newState = Object.assign({}, state)

        // index = newState.infoGiocatori.findIndex((player) => player.id === turnoId)
        // console.log("index: ", index)

        // newState.infoGiocatori[index].active = false

        // if (newState.infoGiocatori[index + 1] === undefined) {
        //     //Chiamata API per termiane la partita
        //     alert("turni finiti")
        //     return
        // }

        // newState.infoGiocatori[index + 1].active = true
        // setState({
        //     ...state,
        //     infoGiocatori: newState.infoGiocatori,
        //     contatoreTurni: state.contatoreTurni + 1
        // })
    }

    const carta = () => {
        const newState = Object.assign({}, state)

        const nextCard = Math.floor(Math.random() * 10 + 1)

        newState.infoGiocatori[state.turns].otherCards.push(nextCard)
        let sumCard = newState.infoGiocatori[state.turns].otherCards.reduce((a, b) => a + b, newState.infoGiocatori[state.turns].firstCard)

        console.log("initCard", state.infoGiocatori[state.turns].firstCard, "nextCard", nextCard, "sommatoria: ", sumCard)

        if (sumCard > 7.5) {
            console.log("Hai perso zi")
            // myRef.current[state.turns].style = {backgrounColor : 'green'}
            console.log(myRef.current[state.turns])

            myRef.current[state.turns].style.border = '20px solid green'

            newState.infoGiocatori[state.turns].isDrunk = true
            stoppe()
            // newState.isMyTurn = false
            // newState.infoGiocatori[index].active = false
            // newState.infoGiocatori[index + 1].active = true
            return

        }

        setState(newState)

    }


    return (


        <View style={{ height: 600, backgroundColor: 'blue' }}>
            <>

                <>
                    <Button styleCustom={{ backgrounColor: 'blue' }} label="Stop" callback={stoppe} />
                    <Button label="Carta" callback={carta} />
                </>





                <View style={{ flexDirection: 'row', width: Dimensions.get('screen').width, justifyContent: 'space-between' }}>
                    {
                        state.infoGiocatori.map(renderPlayer)
                    }
                </View>
            </>
        </View>
    )
}

export default Game