import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'


const playerList = [{
    userId: 1,
    username: 'Yugi Muto',
    points: '99999'
},{
    userId: 34,
    username: 'Yami Yugi',
    points: '9567'
},{
    userId: 96,
    username: 'Maestro Muten',
    points: '13'
},{
    userId: 756,
    username: 'Nico Robin',
    points: '431'
},{
    userId: 111,
    username: 'Seto Kaiba',
    points: '788'
},{
    userId: 543,
    username: 'Sanpei',
    points: '9'
}]

const Leaderboard = () => {

    const [state, setState] = useState({
        topPlayerList: playerList
    })


    useEffect(()=>{
        //Funzione API per prendere top giocatori
        
    }, [])


    return (
        <View>
            {
                state.topPlayerList.map()
            }
        </View>
    )
}

export default Leaderboard