import { XOutboundUserDTO } from 'api/user/XOutboundUserDTO'
import { SERVER_URL } from 'react-native-dotenv'

/**
* This method will return a promise with a user object on successful login and an
* error when passed a bad request or invalid token
* 
* The /user/me endpoint is located at https://github.com/maddiearogers/LiveLotAppAPI/blob/master/api/controllers/userCtrl.js 
* under the me export
* 
* @param token the token used for auth
*/
const checkToken = async (token: string): Promise<XOutboundUserDTO> => {
  const authEndpoint = '/user/me'


  console.log(SERVER_URL + authEndpoint)
  const response = await fetch(SERVER_URL + authEndpoint, {
    method: 'GET',
    headers: new Headers({
      'token': token,
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  })

  if (!response.ok) {
    const json = await response.json()
    throw Error(`${response.status} Error: ${json.message}`)
  }

  const body = await response.json()
  console.log('Success, token authenticated!')
  return body
}

export { checkToken }