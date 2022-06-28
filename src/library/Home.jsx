import React from "react"
import { ImageBackground, Dimensions,View } from "react-native"
//Components
import Button from './Button'



const Home = ({ goTo, logoutCallback, styleTextBtn, styleBtn }) => {

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
            <View style={{width: '80%',alignItems:'center',minHeight:'60%',justifyContent:'center',borderRadius:10, backgroundColor: 'rgba(61, 52, 25, 0.6)',}}>
                <Button styleCustomText={styleTextBtn} styleCustom={styleBtn} callback={navigateTo("LobbyPage")} label="Lobby" />
                <Button styleCustomText={styleTextBtn} styleCustom={styleBtn} callback={navigateTo("LeaderboardPage")} label="Leaderboard" />
                <Button styleCustomText={styleTextBtn} styleCustom={styleBtn} callback={logout} label="Logout" />
            </View>
        </ImageBackground>
    )
}

export default Home