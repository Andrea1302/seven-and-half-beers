import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import Button from './Button'
//AsyncStorage
import { getStorage } from './utils/asyncStorage'

import { createLobby, deleteLobby } from './services/api/lobby/lobbyApi'

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

        if (locationFrom === "newlobby") {
            //let response = await chiamataIpoteticaAPIperCreareLobby&PrendereID
            //console.log(response) 
            //connectToLobby(response.data.lobby.id) funzione da generalizzare e importare
            //newState.playerList = response.data.lobby.elencoPlayer
        } else {
            let user = await getStorage('user')
            console.log('user', user)
            let response = await createLobby(user?.token)
            console.log('responseCreate',response)
        }

    }

    useEffect(() => {
        webSocketLobby()
    }, [])

    const deleteLobbyFunc = async () => {
        let user = await getStorage('user')
        let response = await deleteLobby(user?.token)
        console.log('responseDelete', response)
    }
    const renderPlayerLobby = (player, key) => {
        return (
            <>
                <Text key={key}>
                    {player.username}
                </Text>
                <Button callback={deleteLobbyFunc} label='Delete' />
            </>
        )
    }

    const testButton = () => {
        console.log("startGame")
    }

    const chiamata = async () => {
        let response = await createLobby('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJydWJiZXJAZ21haWwuY29tIiwicm9sZXMiOlsiVVNFUiJdLCJpYXQiOjE2NTYwODQzODMsImV4cCI6MTY1NjA4Nzk4M30.2bXNp2hJn3H5Ktz_bcweUg4Zg6NJofVhxNx2jN7MqPY')
        console.log('response', response)
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