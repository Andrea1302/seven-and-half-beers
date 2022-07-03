import { putApi, postApi, deleteApi } from '../../genericServices';

const createLobby = async (token) => {
    return await postApi('lobby', {}, token)
}

const deleteLobby = async (token) => {
    return await deleteApi('lobby', token)
}

const randomLobby = async (token, id) => {
    return await putApi(`lobby/${id}`, {}, token)
}

export { createLobby, deleteLobby, randomLobby }