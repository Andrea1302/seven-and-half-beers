import React, { useEffect, useState } from "react"
import { ImageBackground, Dimensions } from "react-native"
import { getStorage } from './utils/asyncStorage'

//Components
import Button from './Button'


const Home = ({ goTo, logoutCallback }) => {
    useEffect(() => {
        getUser()
    }, [])
    const getUser = async () => {
        let newstate = Object.assign({}, state)
        let user = await getStorage('user')
        if (user !== undefined) {
            newstate.isUserLogged = true
        }
        setState({
            ...state,
            isUserLogged: newstate.isUserLogged
        })
    }
    const navigateTo = (path) => () => {
        goTo(path)
    }
    const logout = async () => {
        logoutCallback()
    }
    return (
        <ImageBackground
            style={{ height: Dimensions.get('screen').height, flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}
            source={{ uri: 'https://thumbs.gfycat.com/LikableMarriedArizonaalligatorlizard-size_restricted.gif' }}
        >

            <Button callback={navigateTo("quickplay")} label="Gioca Veloce" />
            <Button callback={navigateTo("LobbyPage")} label="Crea Lobby" />
            <Button callback={navigateTo("leaderboard")} label="Leaderboard" />
            <Button callback={logout} label="Logout" />
        </ImageBackground>
    )
}

export default Home