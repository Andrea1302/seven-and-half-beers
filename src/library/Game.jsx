import React, { useEffect, useState, useRef } from "react";
import { View, ImageBackground, Image, Text } from 'react-native';

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
    id: 1,
    username: "Sempronio",
    points: 1000,
    firstCard: 5,
    active: false,
    otherCards: []
}, {
    id: 2,
    username: "PotatoGnognos",
    points: 758,
    firstCard: 2,
    active: false,
    otherCards: []
}, {
    id: 3,
    username: "Yugi Muto",
    points: 9999,
    firstCard: "Exodia",
    active: false,
    otherCards: []
}, {
    id: 4,
    username: "Seto Kaiba",
    points: 1,
    firstCard: 6,
    active: false,
    otherCards: []
}, {
    id: 5,
    username: "Mai Valentine",
    points: 69,
    firstCard: 3,
    active: false,
    otherCards: []
}, {
    id: 6,
    username: "Bulma",
    points: 420,
    firstCard: 2,
    active: false,
    otherCards: []
}, {
    id: 7,
    username: "Nico Robin",
    points: 0,
    firstCard: 0.5,
    active: false,
    otherCards: []
}]

let turnoId = null

const Game = ({ user, arrayPlayer }) => {

    const [state, setState] = useState({
        infoGiocatori: playerList,
        contatoreTurni: 0
    })

    const playerIcon = useRef()
    const beer = useRef()

    useEffect(() => {
        //Logica turni:
        const newState = Object.assign({}, state)

        state.infoGiocatori[0].active === true

        state.infoGiocatori.forEach((player) => {
            if (player.active === true) {
                turnoId = player.id
            }
        })

        console.log("Tocca al giocatore con id:", turnoId)

    }, [state.contatoreTurni])


    const stoppe = () => {
        /*         let index = state.playerList.findIndex((player) => player.id === turnoId)
        
                console.log(newState)
                newState.playerList[index].active = false
        
                if (newState.playerList[index + 1] === undefined) {
                    return
                    //Chiamata API per termiane la partita
                }
        
                newState.playerList[index + 1].active = true
                setState(newState) */
        setState({ ...state, contatoreTurni: state.contatoreTurni + 1 })
    }


    return (
        <ImageBackground
            source={{ uri: 'https://cdn.shopify.com/s/files/1/1772/0301/products/3_47247d8e-5f77-4b71-b13c-6e1c08adb51f.png?v=1575939071' }}
            style={styleGame.gameTable}
        >
            <View style={styleGame.gameTable}>


                <ImageBackground
                    source={{ uri: 'https://ae01.alicdn.com/kf/HTB1x512QXXXXXXIaFXXq6xXFXXXp/Huayi-asse-di-legno-fotografia-sfondo-paesaggio-foto-personalizzata-ritratto-studios-background-bordo-sfondo-xt4933.jpg' }}
                    resizeMode="cover"
                    style={styleGame.table}
                >

                    {/* ER SPILLATORE*/}

                    <Image
                        resizeMode="center"
                        style={styleGame.deck}
                        source={{ uri: 'https://www.bereacasa.it/wp-content/uploads/2018/01/heineken5lt.jpg' }}
                    />


                    <View style={styleGame.playerContainer}>

                        <View style={styleGame.topUser}>
                            {/*PLAYER 1*/}
                            {state.infoGiocatori[0] !== undefined
                                ?
                                <View style={styleGame.playerRow}>

                                    <View style={{ flexDirection: "row", height: '80%' }}>
                                    </View>

                                    <Text>{state.infoGiocatori[0].username}</Text>
                                    <Text>{state.infoGiocatori[0].points}</Text>
                                </View>
                                :
                                <View>
                                    <Image
                                        resizeMode="center"
                                        style={styleGame.user}
                                        source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
                                    />
                                </View>
                            }

                            {/*PLAYER 2*/}
                            {state.infoGiocatori[1] !== undefined
                                ?
                                <View style={styleGame.playerRow}>
                                    <View style={{ flexDirection: "row", height: '80%' }}>
                                    </View>

                                    <Text>{state.infoGiocatori[1].username}</Text>
                                    <Text>{state.infoGiocatori[1].points}</Text>
                                </View>
                                :
                                <View>
                                    <Image
                                        resizeMode="center"
                                        style={styleGame.user}
                                        source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
                                    />
                                </View>
                            }

                            {/*PLAYER 3*/}
                            {state.infoGiocatori[2] !== undefined
                                ?
                                <View style={styleGame.playerRow}>
                                    <View style={{ flexDirection: "row", height: '80%' }}>
                                    </View>

                                    <Text>{state.infoGiocatori[2].username}</Text>
                                    <Text>{state.infoGiocatori[2].points}</Text>
                                </View>
                                :
                                <View>
                                    <Image
                                        resizeMode="center"
                                        style={styleGame.user}
                                        source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
                                    />
                                </View>
                            }
                        </View>


                        <View style={styleGame.centralUser}>
                            {/*PLAYER 4*/}
                            {state.infoGiocatori[3] !== undefined
                                ?
                                <View style={[styleGame.playerRow, styleGame.centralSx]}>

                                    <View style={{ flexDirection: "row", height: '80%' }}>
                                    </View>

                                    <Text>{state.infoGiocatori[3].username}</Text>
                                    <Text>{state.infoGiocatori[3].points}</Text>
                                </View>
                                :
                                <View>
                                    <Image
                                        resizeMode="center"
                                        style={styleGame.user}
                                        source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
                                    />
                                </View>
                            }

                            {/*PLAYER 5*/}
                            {state.infoGiocatori[4] !== undefined
                                ?
                                <View style={[styleGame.playerRow, styleGame.centralDx]}>
                                    <View style={{ flexDirection: "row", height: '80%' }}>
                                    </View>

                                    <Text>{state.infoGiocatori[4].username}</Text>
                                    <Text>{state.infoGiocatori[4].points}</Text>
                                </View>
                                :
                                <View style={[styleGame.playerRow, styleGame.centralDx]}>
                                    <Image
                                        resizeMode="center"
                                        style={styleGame.user}
                                        source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
                                    />
                                </View>
                            }
                        </View>


                        <View style={styleGame.bottomUser}>
                            {/*PLAYER 6*/}
                            {state.infoGiocatori[5] !== undefined
                                ?
                                <View style={styleGame.playerRow}>

                                    <View style={{ flexDirection: "row", height: '80%' }}>
                                    </View>

                                    <Text>{state.infoGiocatori[5].username}</Text>
                                    <Text>{state.infoGiocatori[5].points}</Text>
                                </View>
                                :
                                <View style={styleGame.playerRow}>
                                    <Image
                                        resizeMode="center"
                                        style={styleGame.user}
                                        source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
                                    />
                                </View>
                            }

                            {/*PLAYER 7*/}
                            {state.infoGiocatori[6] !== undefined
                                ?
                                <View style={styleGame.playerRow}>
                                    <View style={{ flexDirection: "row", height: '80%' }}>
                                    </View>

                                    <Text>{state.infoGiocatori[6].username}</Text>
                                    <Text>{state.infoGiocatori[6].points}</Text>
                                </View>
                                :
                                <View style={styleGame.playerRow}>
                                    <Image
                                        resizeMode="center"
                                        style={styleGame.user}
                                        source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
                                    />
                                </View>
                            }
                        </View>


                    </View>

                    <Button label="Stop" callback={stoppe} />
                    {/* <Button label="Carta" callback={carta} /> */}

                </ImageBackground>
            </View>
        </ImageBackground >
    )
}

export default Game