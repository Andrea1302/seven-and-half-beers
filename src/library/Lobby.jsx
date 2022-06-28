import React, { useState, useEffect } from 'react'
import { View, Platform } from 'react-native'
import Button from './Button'
//AsyncStorage
import { getStorage } from './utils/asyncStorage'

import { createLobby, deleteLobby, randomLobby } from './services/api/lobby/lobbyApi'


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

const Lobby = ({ createCallback, randomCallback, randomCallbackMobile, createCallbackMobile, Children }) => {

    const [state, setState] = useState({
        playerList: elencoPlayer,
        isHost: false
    })


    useEffect(() => {
        webSocketLobby()
    }, [])

    const random = async () => {
        if (Platform.OS === 'web') {
            let user = await getStorage('user')
            let response = await randomLobby(user?.token)
            randomCallback(response.data)
        } else {
            randomCallbackMobile()
        }
    }
    const create = async () => {
        if (Platform.OS === 'web') {
            let user = await getStorage('user')
            let response = await createLobby(user?.token)
            createCallback(response.data)
        } else {
            createCallbackMobile()
        }
    }

    return (
        <View>

            <Button callback={create} label="Create Lobby" />
            <Button callback={random} label="Random Lobby" />
            {Children}
        </View>
    )
}

export default Lobby