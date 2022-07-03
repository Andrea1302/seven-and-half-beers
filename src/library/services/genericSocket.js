import { socket } from '../services/configSocket'

//onOpen
export function connectWithWs(myUser) {
    socket.onopen = (e) => {
        console.log("[open] Connection established");
        //Subscribe to the channel
        socket.send(JSON.stringify(myUser))
    }
}
// export async function connectWithWs() {
//     try {
//         let server = await connect()
//         console.log('server', server)
//     } catch (error) {
//         console.log("ooops ", error)
//     }
// }
//send
export function sendMessageToWs(message) {
    console.log('messeggio da inviare', message)
    socket.send(JSON.stringify(message))
}
export function requestCard(message) {
    socket.send(JSON.stringify(message))
    setTimeout(() => {
        endMatch(message.user_id);
    }, 100);
}
function endMatch(id) {
    console.log("check end match...");
    const message = {
        user_id: id,
        method: "checkEndMatch",
    }
    sendMessageToWs(message);
}

//onMessage
export function listenToWs() {
    socket.onmessage = function (event) {
        console.log("Message received: ", event.data)
        return event.data
    }
    return socket.onmessage


}

//onClose
export function closeConnectionWithWs() {
    socket.close()
    console.log('çhiuso')
}
