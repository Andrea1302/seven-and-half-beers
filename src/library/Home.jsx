import React from "react"
import { ImageBackground, Dimensions, View } from "react-native"
//Components
import Button from './Button'
import { createLobby, deleteLobby, randomLobby } from "./services/api/lobby/lobbyApi"
import { getStorage } from "./utils/asyncStorage"


let userData

const Home = ({ goTo, logoutCallback, styleTextBtn, styleBtn, mobileUser }) => {


    const navigateTo = (path) => async () => {

        let responseLobby

        userData = Platform.OS === 'web' ? await getStorage('user') : mobileUser;
        console.log('userdatatokenfromHome', userData.token)

        switch (path) {
            case "RandomLobby": {
                responseLobby = await randomLobby(userData.token)
                console.log('responseLobby: ', responseLobby.data)
                goTo("LobbyPage", responseLobby.data)
                break;
            }
            case "CreateLobby": {
                responseLobby = await createLobby(userData.token)
                console.log('responseLobby: ', responseLobby.data)
                goTo("LobbyPage", responseLobby.data)
                break;
            }
            case "LeaderboardPage": {
                goTo(path)
                break;
            }
        }
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
                <Button styleCustomText={styleTextBtn} styleCustom={styleBtn} callback={navigateTo("RandomLobby")} label="Random Lobby" />
                <Button styleCustomText={styleTextBtn} styleCustom={styleBtn} callback={navigateTo("CreateLobby")} label="Create Lobby" />
                <Button styleCustomText={styleTextBtn} styleCustom={styleBtn} callback={navigateTo("LeaderboardPage")} label="Leaderboard" />
                <Button styleCustomText={styleTextBtn} styleCustom={styleBtn} callback={logout} label="Logout" />
            </View>
        </ImageBackground>
    )
}

export default Home