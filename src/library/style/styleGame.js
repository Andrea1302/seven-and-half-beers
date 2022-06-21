import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({

    gameTable: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    table: {
        backgroundColor: "yellow",
        position: 'relative',
        height: 300,
        width: '80%',
        borderRadius: 20,
        justifyContent: 'space-between'
    },
    bastardi: {
        height: "100%",
        width: 100
    },
    playerContainer: {
        justifyContent: 'space-between',
        position: "relative",
        height: '100%',
    },
    centralUser: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: "relative",
        bottom: 50,
        width: "100%",
        height: 100
    },
    centralSx: {
        position: "relative",
        right: 50
    },
    centralDx: {
        position: "relative",
        left: 50
    },
    topUser: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: "releative",
        bottom: 50,
        width: "100%",
        height: 100
    },
    bottomUser: {
        height: 100,
        justifyContent: 'space-around',
        alignItems: 'center',
        top: 50,
        flexDirection: 'row',
        position: 'relative'
    },
    user: {
        height: "80%",
        width: 100,
        backgroundColor: 'blue',
        borderRadius: 50
    },
    playerRow: {
        height: '100%',
        alignItems: "center"
    },
    deck: {
        position: 'absolute',
        top: "50%",
        left: "50%",
        height: 100,
        width: 100,
        transform: "translate(-50%, -50%)"
    }
})