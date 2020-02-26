import { XOutboundToken } from 'api/authentication/XOutboundToken'
import { IXInboundLogin } from 'api/user/XInboundLogin'
import { SERVER_URL } from 'react-native-dotenv'

/**
* This method will return a promise with a jwt on successful login and an
* error on an unsuccessful login
* 
* The login endpoint is located at https://github.com/maddiearogers/LiveLotAppAPI/blob/master/api/controllers/userCtrl.js 
* under the login export
* 
* @param email the user email
* @param password the user password
*/
const login = async (email: string, password: string): Promise<XOutboundToken | undefined> => {
  const loginEndpoint = '/login'

  const loginInbound: IXInboundLogin = {
    email: email,
    password: password
  }

  try {
    console.log(SERVER_URL + loginEndpoint)
    console.log('loginInbound', loginInbound)
    const response = await fetch(SERVER_URL + loginEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(loginInbound)
    })

    if (!response.ok) {
      console.log('response failed, ', response.status)
      const json = await response.json()
      console.log('error message', json.message)
      return {
        statusCode: response.status,
        message: json.message
      }
    }

    console.log('response', response)
    const body = await response.json()
    console.log('body', body)
    return body
  } catch (e) {
    console.log(e)
  }
}

export { login }