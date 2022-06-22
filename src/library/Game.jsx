import React, { useEffect, useState, useRef } from "react";
import { View, ImageBackground, Image, Text, Dimensions } from 'react-native';

//import LottieView from 'react-native-web-lottie'

// style 
import styleGame from "./style/styleGame";

//Components
import Button from './Button'


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

const Game = ({ user, arrayPlayer }) => {
    const myRef = useRef([])
    const [state, setState] = useState({
        infoGiocatori: playerList,
        contatoreTurni: 0,
        turns: 0,
        isMyTurn: false,
    })

    const playerIcon = useRef()
    const beer = useRef()

    //DidMount
    useEffect(() => {
        let newState = Object.assign({}, state)
        //Chiamata per prendere id user dallo storage
        myId = 59

        if (state.infoGiocatori[state.turns].id === myId) {
            newState.isMyTurn = true
        } else {
            newState.isMyTurn = false
        }
        setState(newState)

    }, [state.turns])
    const renderPlayer = (player, key) => {
        return (
            <View ref={el => myRef.current[key] = el} key={key} style={{ height: 200, width: 100, backgroundColor: state.infoGiocatori[state.turns].id === player.id ? 'yellow' : 'red' }}>
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


            </View >

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
        // <ImageBackground
        //     source={{ uri: 'https://cdn.shopify.com/s/files/1/1772/0301/products/3_47247d8e-5f77-4b71-b13c-6e1c08adb51f.png?v=1575939071' }}
        //     style={styleGame.gameTable}
        // >
        //     <View style={styleGame.gameTable}>


        //         <ImageBackground
        //             source={{ uri: 'https://ae01.alicdn.com/kf/HTB1x512QXXXXXXIaFXXq6xXFXXXp/Huayi-asse-di-legno-fotografia-sfondo-paesaggio-foto-personalizzata-ritratto-studios-background-bordo-sfondo-xt4933.jpg' }}
        //             resizeMode="cover"
        //             style={styleGame.table}
        //         >

        //             {/* ER SPILLATORE*/}

        //             <Image
        //                 resizeMode="center"
        //                 style={styleGame.deck}
        //                 source={{ uri: 'https://www.bereacasa.it/wp-content/uploads/2018/01/heineken5lt.jpg' }}
        //             />


        //             <View style={styleGame.playerContainer}>

        //                 <View style={styleGame.topUser}>
        //                     {/*PLAYER 1*/}
        //                     {state.infoGiocatori[0] !== undefined
        //                         ?
        //                         <View style={styleGame.playerRow}>

        //                             <View style={{ flexDirection: "row", height: '80%' }}>
        //                             </View>

        //                             <Text>{state.infoGiocatori[0].username}</Text>
        //                             <Text>{state.infoGiocatori[0].points}</Text>
        //                         </View>
        //                         :
        //                         <View>
        //                             <Image
        //                                 resizeMode="center"
        //                                 style={styleGame.user}
        //                                 source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
        //                             />
        //                         </View>
        //                     }

        //                     {/*PLAYER 2*/}
        //                     {state.infoGiocatori[1] !== undefined
        //                         ?
        //                         <View style={styleGame.playerRow}>
        //                             <View style={{ flexDirection: "row", height: '80%' }}>
        //                             </View>

        //                             <Text>{state.infoGiocatori[1].username}</Text>
        //                             <Text>{state.infoGiocatori[1].points}</Text>
        //                         </View>
        //                         :
        //                         <View>
        //                             <Image
        //                                 resizeMode="center"
        //                                 style={styleGame.user}
        //                                 source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
        //                             />
        //                         </View>
        //                     }

        //                     {/*PLAYER 3*/}
        //                     {state.infoGiocatori[2] !== undefined
        //                         ?
        //                         <View style={styleGame.playerRow}>
        //                             <View style={{ flexDirection: "row", height: '80%' }}>
        //                             </View>

        //                             <Text>{state.infoGiocatori[2].username}</Text>
        //                             <Text>{state.infoGiocatori[2].points}</Text>
        //                         </View>
        //                         :
        //                         <View>
        //                             <Image
        //                                 resizeMode="center"
        //                                 style={styleGame.user}
        //                                 source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
        //                             />
        //                         </View>
        //                     }
        //                 </View>


        //                 <View style={styleGame.centralUser}>
        //                     {/*PLAYER 4*/}
        //                     {state.infoGiocatori[3] !== undefined
        //                         ?
        //                         <View style={[styleGame.playerRow, styleGame.centralSx]}>

        //                             <View style={{ flexDirection: "row", height: '80%' }}>
        //                             </View>

        //                             <Text>{state.infoGiocatori[3].username}</Text>
        //                             <Text>{state.infoGiocatori[3].points}</Text>
        //                         </View>
        //                         :
        //                         <View>
        //                             <Image
        //                                 resizeMode="center"
        //                                 style={styleGame.user}
        //                                 source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
        //                             />
        //                         </View>
        //                     }

        //                     {/*PLAYER 5*/}
        //                     {state.infoGiocatori[4] !== undefined
        //                         ?
        //                         <View style={[styleGame.playerRow, styleGame.centralDx]}>
        //                             <View style={{ flexDirection: "row", height: '80%' }}>
        //                             </View>

        //                             <Text>{state.infoGiocatori[4].username}</Text>
        //                             <Text>{state.infoGiocatori[4].points}</Text>
        //                         </View>
        //                         :
        //                         <View style={[styleGame.playerRow, styleGame.centralDx]}>
        //                             <Image
        //                                 resizeMode="center"
        //                                 style={styleGame.user}
        //                                 source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
        //                             />
        //                         </View>
        //                     }
        //                 </View>


        //                 <View style={styleGame.bottomUser}>
        //                     {/*PLAYER 6*/}
        //                     {state.infoGiocatori[5] !== undefined
        //                         ?
        //                         <View style={styleGame.playerRow}>

        //                             <View style={{ flexDirection: "row", height: '80%' }}>
        //                             </View>

        //                             <Text>{state.infoGiocatori[5].username}</Text>
        //                             <Text>{state.infoGiocatori[5].points}</Text>
        //                         </View>
        //                         :
        //                         <View style={styleGame.playerRow}>
        //                             <Image
        //                                 resizeMode="center"
        //                                 style={styleGame.user}
        //                                 source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
        //                             />
        //                         </View>
        //                     }

        //                     {/*PLAYER 7*/}
        //                     {state.infoGiocatori[6] !== undefined
        //                         ?
        //                         <View style={styleGame.playerRow}>
        //                             <View style={{ flexDirection: "row", height: '80%' }}>
        //                             </View>

        //                             <Text>{state.infoGiocatori[6].username}</Text>
        //                             <Text>{state.infoGiocatori[6].points}</Text>
        //                         </View>
        //                         :
        //                         <View style={styleGame.playerRow}>
        //                             <Image
        //                                 resizeMode="center"
        //                                 style={styleGame.user}
        //                                 source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
        //                             />
        //                         </View>
        //                     }
        //                 </View>


        //             </View>

        //             {
        //                 state.isMyTurn &&
        //                 <>
        //                     <Button styleCustom={{ backgrounColor: 'blue' }} label="Stop" callback={stoppe} />
        //                     <Button label="Carta" callback={carta} />
        //                 </>
        //             }






        //         </ImageBackground>
        //     </View>
        //     <>
        //         <Button styleCustom={{ backgrounColor: 'blue' }} label="Stop" callback={stoppe} />
        //         <Button label="Carta" callback={carta} />
        //     </>
        // </ImageBackground >

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