import React from "react"
import { View, ImageBackground } from "react-native"

//Components
import Button from './Button'

const Home = ({ goTo }) => {

    const navigateTo = (path) => () => {
        goTo(path)
    }

    return (
        <ImageBackground
            style={{ height: '100vh', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}
            source={{ uri: 'https://thumbs.gfycat.com/LikableMarriedArizonaalligatorlizard-size_restricted.gif' }}
        >

            <Button callback={navigateTo("quickplay")} label="Gioca Veloce" />
            <Button callback={navigateTo("newlobby")} label="Crea Lobby" />
            <Button callback={navigateTo("leaderboard")} label="Leaderboard" />
            <Button callback={navigateTo("login")} label="Login/Registrati" />

        </ImageBackground>
    )
}

export default Home