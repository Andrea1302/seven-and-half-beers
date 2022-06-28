import { putApi, postApi, deleteApi } from '../../genericServices';

const createLobby = async (token) => {
    return await postApi('lobby', {}, token)
}

const deleteLobby = async (token) => {
    return await deleteApi('lobby', token)
}

const randomLobby = async (token) => {
    return await putApi(`lobby/-1`, token)
}

export { createLobby, deleteLobby, randomLobby }