import React, { useEffect, useState } from "react";
import { View, ImageBackground, Image, Text } from 'react-native';

import LottieView from 'lottie-react-native';
// style 
import styleGame from "./style/styleGame";

let ptPlayers = [
    {
        player1: {
            card1: 5
        },
    },
    {
        player2: {
            card1: 1
        }
    },
    {
        player3: {
            card1: 2
        }
    },
    {
        player4: {
            card1: 3
        }
    },
    {
        player5: {
            card1: 7
        }
    },
    {
        player6: {
            card1: 3
        }
    },
    {
        player7: {
            card1: 2
        }
    }

]

const Game = ({ user }) => {

    return (
        <ImageBackground
            source={{ uri: 'https://cdn.shopify.com/s/files/1/1772/0301/products/3_47247d8e-5f77-4b71-b13c-6e1c08adb51f.png?v=1575939071' }}
            style={styleGame.gameTable}
        >
            <ImageBackground
                source={{ uri: 'https://ae01.alicdn.com/kf/HTB1x512QXXXXXXIaFXXq6xXFXXXp/Huayi-asse-di-legno-fotografia-sfondo-paesaggio-foto-personalizzata-ritratto-studios-background-bordo-sfondo-xt4933.jpg' }}
                style={styleGame.table}
            >
                <View style={styleGame.row}>
                    <View style={styleGame.topUser}>
                        <Image
                            resizeMode="center"
                            style={styleGame.user}
                            source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
                        />
                        <View style={styleGame.pt}>
                            <View style={styleGame['pts' + ptPlayers[0].player1.card1]} />
                        </View>

                    </View>
                    <View style={styleGame.topUser}>
                        <LottieView style={{ height: 100 }} source={require('../assets/lotties/user.json')} autoPlay loop />

                        {/* <Image
                            resizeMode="center"
                            style={styleGame.user}
                            source={{ uri: 'https://flyclipart.com/thumb2/drunk-leprechaun-image-811722.png' }}
                        />
                        <View style={styleGame.pt}>
                            <View style={styleGame['pts' + ptPlayers[1].player2.card1]} />
                        </View> */}

                    </View>
                    <View style={styleGame.topUser}>
                        <LottieView style={{ height: 100 }} source={require('../assets/lotties/user.json')} autoPlay loop />

                        {/* <Image
                            resizeMode="center"
                            style={styleGame.user}
                            source={{ uri: 'https://t.pimg.jp/030/961/784/5/30961784.jpg' }}
                        />
                        <View style={styleGame.pt}>
                            <View style={styleGame['pts' + ptPlayers[2].player3.card1]} />
                        </View> */}

                    </View>

                </View>
                <View style={styleGame.rowCentral}>
                    <View style={styleGame.centralUser}>
                        <LottieView style={{ height: 100 }} source={require('../assets/lotties/user.json')} autoPlay loop />
                        {/* <Image
                            resizeMode="center"
                            style={styleGame.user}
                            source={{ uri: 'https://e7.pngegg.com/pngimages/296/710/png-clipart-man-holding-bottle-illustration-alcohol-intoxication-drink-drunk-man-hand-people.png' }}
                        />
                        <View style={styleGame.pt}>
                            <View style={styleGame['pts' + ptPlayers[3].player4.card1]} />
                        </View> */}

                    </View>
                    <View style={styleGame.centralUser}>
                        <View style={styleGame.pt}>
                            <View style={styleGame['pts' + ptPlayers[4].player5.card1]} />
                        </View>

                        <Image
                            resizeMode="center"
                            style={styleGame.user}
                            source={{ uri: 'https://e7.pngegg.com/pngimages/645/44/png-clipart-cartoon-women-borracho-hand-computer.png' }}
                        />
                    </View>

                </View>
                <View style={styleGame.rowBottom}>
                    <View style={styleGame.bottomUser}>
                        <View style={styleGame.pt}>
                            <View style={styleGame['pts' + ptPlayers[5].player6.card1]} />
                        </View>
                        <Image
                            resizeMode="center"
                            style={styleGame.user}
                            source={{ uri: 'https://e7.pngegg.com/pngimages/543/904/png-clipart-beer-alcohol-intoxication-alcoholic-beverage-illustration-a-drunken-man-with-a-cartoon-illustration-cartoon-character-food.png' }}
                        />

                    </View>
                    <View style={styleGame.bottomUser}>
                        <View style={styleGame.pt}>
                            <View style={styleGame['pts' + ptPlayers[6].player7.card1]} />
                        </View>
                        <Image
                            resizeMode="center"
                            style={styleGame.user}
                            source={{ uri: 'https://img.favpng.com/4/7/25/alcohol-intoxication-cartoon-clip-art-png-favpng-yLSkcL9XkYpKrSKSPj5zYB4Pt.jpg' }}
                        />
                    </View>

                </View>
            </ImageBackground>
        </ImageBackground>
    )
}

export default Game