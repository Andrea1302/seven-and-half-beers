import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'

//Api
import { getUsers } from "./services/api/leaderboard/leaderboard"

const playerList = [{
    userId: 1,
    username: 'Yugi Muto',
    points: '99999'
}, {
    userId: 34,
    username: 'Yami Yugi',
    points: '9567'
}, {
    userId: 96,
    username: 'Maestro Muten',
    points: '13'
}, {
    userId: 756,
    username: 'Nico Robin',
    points: '431'
}, {
    userId: 111,
    username: 'Seto Kaiba',
    points: '788'
}, {
    userId: 543,
    username: 'Sanpei',
    points: '9'
}]

const Leaderboard = () => {

    const [state, setState] = useState({
        topPlayerList: playerList,
        yourPosition: null
    })


    useEffect(() => {
        //Funzione API per prendere top giocatori\
        //getTopPlayers()
    }, [])


    const getTopPlayers = async () => {

        let res = await getUsers()
        let arrayAppoggio = res.data

        arrayAppoggio.sort((a, b) => { return a.score - b.score })

        if (arrayAppoggio.lenght > 9) {
            arrayAppoggio.slice(9, arrayAppoggio.lenght - 1)
        }

        setState({
            ...state,
            topPlayerList: arrayAppoggio
        })
    }

    const renderTopPlayers = (player, key) => {
        return (
            <Text>{player.username} - {player.score}</Text>
        )
    }

    return (
        <View>
            <Text>Ciao</Text>
            {/*
                        {
                state?.topPlayerList?.map(renderTopPlayers)
            }
            */}
        </View>
    )
}

export default Leaderboard