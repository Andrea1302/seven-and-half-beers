import {putApi, postApi, deleteApi} from '../../genericServices';

const createLobby = async (token)=>{
    return await postApi('lobby',{}, token)
}

const deleteLobby = async (token)=>{
    return await deleteApi('lobby', token)
}

const editLobby = async (id,body,token)=>{
    return await putApi(`lobby/${id}`,body,token)
}

export {createLobby,deleteLobby,editLobby}