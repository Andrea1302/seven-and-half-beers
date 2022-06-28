import { socket } from '../services/configSocket'

//onOpen
export function connectWithWs() {
    console.log("sono entrato")
    socket.onopen = function (e) {
        alert("[open] Connection established");
        //socket.send("My name is John");
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
        //return event
    }
    
}

//onClose
export function closeConnectionWithWs() {
    socket.close()
    console.log('çhiuso')
}
