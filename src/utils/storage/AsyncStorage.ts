import AsyncStorage from "@react-native-async-storage/async-storage"

const addToStorage: (k: string, v: string) => void = async (
  key: string,
  value: string
) => {
  try {
    const encryptedValue = value
    await AsyncStorage.setItem(key, encryptedValue)
  } catch (error) {
    console.log(error)
  }
}
const retrieveFromStorage = async (type: string): Promise<string> => {
  if (type == "userToken") {
    let userToken: string
    try {
      userToken = await AsyncStorage.getItem("userToken")
    } catch (e) {
      userToken = ""
      console.log(e)
    }
    return userToken
  } else if (type == "hasRegistered") {
    let hasRegistered: string
    try {
      hasRegistered = await AsyncStorage.getItem("hasRegistered")
    } catch (e) {
      hasRegistered = ""
      console.log(e)
    }
    return hasRegistered
  }
}
const removeItemValue = async (key: string): Promise<string | boolean> => {
  try {
    await AsyncStorage.removeItem(key)
    return true
  } catch (error) {
    console.log(error)
  }
}

export { addToStorage, retrieveFromStorage, removeItemValue }
