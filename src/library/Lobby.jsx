import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

//AsyncStorage
import { getStorage } from './utils/asyncStorage'

//Api

//Components
import Button from "./Button"

const elencoPlayer = [{
    id: 1,
    username: "Pippo Baudo",
    active: false,
    cardList: []
}, {
    id: 2,
    username: "Yugi Mugo",
    active: false,
    cardList: []
}, {
    id: 3,
    username: "Seto Kaiba",
    active: false,
    cardList: []
}, {
    id: 4,
    username: "Re Kaio",
    active: false,
    cardList: []
}, {
    id: 5,
    username: "Sampei",
    active: false,
    cardList: []
}]

const Lobby = ({ locationFrom, idUser }) => {

    const [state, setState] = useState({
        playerList: elencoPlayer,
        isHost: false
    })

    const webSocketLobby = async () => {

        const newState = Object.assign({}, state)
        //const userId = await getStorage("user")
        const userId = 1

        if (state.playerList[0].id === userId) {
            newState.isHost = true
        }

        if (locationFrom === "newlobby") {
            //let response = await chiamataIpoteticaAPIperCreareLobby&PrendereID
            //console.log(response) 
            //connectToLobby(response.data.lobby.id) funzione da generalizzare e importare
            //newState.playerList = response.data.lobby.elencoPlayer
        } else {
            //let response = await chiamataIpoteticaAPIperPrendereID
            //console.log(response) 
            //connectToLobby(response.data.lobby.id) funzione da generalizzare e importare
            //newState.playerList = response.data.lobby.elencoPlayer
        }

        setState(newState)
    }

    useEffect(() => {
        webSocketLobby()
    }, [])


    const renderPlayerLobby = (player, key) => {
        return (
            <Text key={key}>
                {player.username}
            </Text>
        )
    }

    const testButton = () => {
        console.log("startGame")
    }


    return (
        <View>
            {
                state.playerList.map(renderPlayerLobby)
            }
            <View>
                {
                    state.isHost &&
                    <Button label="Start Game" callback={testButton} />
                }
            </View>


        </View>
    )
}

export default Lobby