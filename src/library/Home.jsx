import React from "react"
import { ImageBackground, Dimensions} from "react-native"
//Components
import Button from './Button'



const Home = ({ goTo, logoutCallback }) => {

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
            <Button callback={navigateTo("LobbyPage")} label="Lobby" />
            <Button callback={navigateTo("LeaderboardPage")} label="Leaderboard" />
            <Button callback={logout} label="Logout" />
        </ImageBackground>
    )
}

export default Home