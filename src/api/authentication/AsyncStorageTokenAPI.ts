import AsyncStorage from '@react-native-community/async-storage'

const storeToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('livelot-auth-token', token)
    console.log('stored token', token)
  } catch (e) {
    console.log('Error storing token', e)
  }
}

const getToken = async (): Promise<string> => {
  try {
    const token = await AsyncStorage.getItem('livelot-auth-token')

    if (token !== null && token !== undefined) {
      console.log('got token: ', token)
      return token
    }
  } catch (e) {
    console.log('Error retrieving token', e)
  }
  return ''
}

const signOut = async () => {
  try {
    await AsyncStorage.removeItem('livelot-auth-token')
    console.log('removed token')
    console.log('proof of removal', AsyncStorage.getItem('livelot-auth-token'))
  } catch (e) {
    console.log('Error removing auth token while signing out', e)
  }
}
export { storeToken, getToken, signOut }