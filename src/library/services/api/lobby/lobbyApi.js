import { postApi, deleteApi} from '../../genericServices';

const createLobby = async (token)=>{
    return await postApi('lobby',{}, token)
}

const deleteLobby = async (token)=>{
    return await deleteApi('lobby',{}, token)
}

export {createLobby,deleteLobby}