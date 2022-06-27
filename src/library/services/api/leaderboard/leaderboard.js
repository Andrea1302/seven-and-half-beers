import { getApi } from '../../genericServices'

const getUsers = async () => {
    return await getApi("/users")
}

export {
    getUsers
}