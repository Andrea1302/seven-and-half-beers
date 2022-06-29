import React, { useState, useEffect } from 'react'
import { Text, View, Dimensions } from 'react-native'
import { getUserInfo } from './services/api/auth/authApi';

//Api
import { getUsers } from "./services/api/leaderboard/leaderboard"
import { getStorage } from './utils/asyncStorage';
let user;
const Leaderboard = () => {

    const [state, setState] = useState({
        topPlayerList: null,
        yourPosition: null
    })


    useEffect(() => {
        getUser()
        //Funzione API per prendere top giocatori\
        getTopPlayers()
    }, [])

    const getUser = async () => {
        let userData = await getStorage('user')
        let response = await getUserInfo(userData.id)
        user = response.data
    }
    const getTopPlayers = async () => {

        let res = await getUsers()
        let arrayAppoggio = res.data
        console.log(res.data)
        arrayAppoggio.sort((a, b) => {
            if (a.score > b.score) {
                return -1;
            }
            if (a.score < b.score) {
                return 1;
            }
            return 0;
        })

        if (arrayAppoggio.length > 9) {
            arrayAppoggio.splice(9, arrayAppoggio.length - 10)
        }
        setState({
            ...state,
            topPlayerList: arrayAppoggio
        })
    }

    const renderTopPlayers = (player, key) => {
        let top;
        if (state.topPlayerList[0].id === player.id) {
            top = 'gold'
        } else if (state.topPlayerList[1].id === player.id) {
            top = '#c0c0c0'
        } else if (state.topPlayerList[2].id === player.id) {
            top = '#cd7f32'
        } else {
            top = '#4F8CAB'
        }
        return (
            <View style={{ padding: 10, backgroundColor: top }} key={key}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>{key + 1}) {player.username} - {player.score}</Text>
            </View>
        )
    }

    return (
        <View style={{ height: Dimensions.get('screen').height, backgroundColor: '#61B5D9', paddingVertical: 20 }}>
            <Text style={{ fontSize: 40, marginBottom: 40, fontWeight: 'bold', color: '#fff', textAlign: 'center' }}>LEADERBOARD</Text>
            {
                state?.topPlayerList?.map(renderTopPlayers)
            }
            <View style={{marginVertical:30}}>
                <Text style={{ color: '#fff',fontWeight:'bold',textAlign:'center',fontSize : 24 }}>
                    Your score : {user?.score}
                </Text>
            </View>

        </View>
    )
}

export default Leaderboard