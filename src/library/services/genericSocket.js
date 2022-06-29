import { socket } from '../services/configSocket'

//onOpen
export function connectWithWs(myUser) {
    socket.onopen = function (e) {
        alert("[open] Connection established");
        //Subscribe to the channel
        socket.send(JSON.stringify(myUser))
    }
}

//send
export function sendMessageToWs(message) {
    socket.send(JSON.stringify(message))
}

//onMessage
export function listenToWs() {
    socket.onmessage = function (event) {
        console.log("Message received: ", event.data)
        return event.data
    }


}

//onClose
export function closeConnectionWithWs() {
    socket.close()
    console.log('çhiuso')
}
