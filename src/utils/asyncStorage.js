//import AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';


export async function setStorage(key, value) {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (error) {
        return error?.message
    }
}

export async function getStorage(key) {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value) {
            return JSON.parse(value)
        }
    } catch (error) {
        return error?.message
    }
}

export async function removeStorage(key){
    try{
        await AsyncStorage.removeItem(key)
    }catch(error){
        return error?.message
    }
}

export async function clearStorage(){
    try{
        await AsyncStorage.clear()
    }catch(error){
        return error?.message
    }
}