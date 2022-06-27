import { WEBSOCKET } from "./config";
import SockJS from 'sockjs-client'; // Note this line
import Stomp from 'stompjs';

const SOCKET = new SockJS(WEBSOCKET)
const STOMPCLIENT = Stomp.over(SOCKET)

export const openConnection = (idLobby) => {
    STOMPCLIENT.connect({}, (frame) => {
        console.log('frame', frame)
        STOMPCLIENT.subscribe(`/lobby/${idLobby}`, (res) => {
            console.log('res', JSON.parse('body', res.body))
        })
    })
}

export const wsMessage = () => {
    STOMPCLIENT.onMessage = event => {
        // listen to data sent from the web socket server
        const message = JSON.parse(event.data)
        console.log('message', message)
    }

}

export const sendDataToWs = (idLobby, resource, idUser,) => {
    STOMPCLIENT.send(`/app/room/${idLobby}/${resource}/${idUser}`)
}