import React from "react"
import { ImageBackground, Dimensions, View, Platform } from "react-native"
//Components
import Button from './Button'
import { createLobby, deleteLobby, randomLobby } from "./services/api/lobby/lobbyApi"
import { getStorage } from "./utils/asyncStorage"

var socket = new WebSocket("ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws");

let userData

const Home = ({ goTo, logoutCallback, styleTextBtn, styleBtn, mobileUser }) => {


    const navigateTo = (path) => async () => {

        let responseLobby

        userData = Platform.OS === 'web' ? await getStorage('user') : mobileUser;
        console.log('userdatatokenfromHome', userData.token)
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
            <View style={{ width: '80%', alignItems: 'center', minHeight: '60%', justifyContent: 'center', borderRadius: 10, backgroundColor: 'rgba(61, 52, 25, 0.6)', }}>
                <Button styleCustomText={styleTextBtn} styleCustom={styleBtn} callback={navigateTo("LobbyPage")} label="Lobby" />
                <Button styleCustomText={styleTextBtn} styleCustom={styleBtn} callback={navigateTo("LeaderboardPage")} label="Leaderboard" />
                <Button styleCustomText={styleTextBtn} styleCustom={styleBtn} callback={logout} label="Logout" />
            </View>
        </ImageBackground>
    )
}

export default Home