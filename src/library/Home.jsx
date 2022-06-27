import React, { useEffect, useState } from "react"
import { ImageBackground } from "react-native"
import { getStorage, removeStorage } from './utils/asyncStorage'

//Components
import Button from './Button'


const Home = ({ goTo }) => {
    const [state, setState] = useState({
        isUserLogged: false
    })

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
        await removeStorage('user');
        setState({
            ...state,
            isUserLogged: false
        })
    }
    return (
        <ImageBackground
            style={{ height: '100vh', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}
            source={{ uri: 'https://thumbs.gfycat.com/LikableMarriedArizonaalligatorlizard-size_restricted.gif' }}
        >

            <Button callback={navigateTo("quickplay")} label="Gioca Veloce" />
            <Button callback={navigateTo("newlobby")} label="Crea Lobby" />
            <Button callback={navigateTo("leaderboard")} label="Leaderboard" />

            {
                state.isUserLogged ?
                    <Button callback={logout} label="Logout" />
                    :
                    <Button callback={navigateTo("login")} label="Login/Registrati" />

            }

        </ImageBackground>
    )
}

export default Home