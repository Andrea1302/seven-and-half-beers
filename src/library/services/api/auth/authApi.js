/* The following API are sorted by AUTH then with the following priority: GET->POST->PUT->PATCH->DELETE  */

// import { getLocalStorage } from '../../../utils/localStorage/localStorage';
import { getApi, postApi } from '../../genericServices'

const registerUserPostApi = async (obj) => {
    return await postApi(`user/registration`, obj);
}

// const authGetApi = async () => {
//     return await getApi(`index`);
// }

const signInPostApi = async (obj) => {
    return await postApi(`signin`, obj);
}

const getUserInfo = async (id) =>{
    return await getApi(`getuser/${id}`);
}

/* AUTH:isLogged */
// const updateAuthTokenPostApi = async () => {
//     return await postApi(`/updateAuthToken`, {
//         refreshToken: getLocalStorage('refreshToken')
//       });
// }

export {
    signInPostApi, registerUserPostApi,getUserInfo
}

