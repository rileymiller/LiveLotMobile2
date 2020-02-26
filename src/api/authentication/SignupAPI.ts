import { XOutboundToken } from 'api/authentication/XOutboundToken'
import { IXInboundSignup } from 'api/user/XInboundSignup'
import { SERVER_URL } from 'react-native-dotenv'

/**
* This method will return a promise with a jwt on successful signup and an
* error on an unsuccessful signup
* 
* The signup endpoint is located at https://github.com/maddiearogers/LiveLotAppAPI/blob/master/api/controllers/userCtrl.js 
* under the signup export
* 
* @param email the user email
* @param password the user password
* @param username the user username
*/
const signup = async (email: string, password: string, confirmPassword: string, username: string): Promise<XOutboundToken | undefined> => {
  const signupEndpoint = '/signup'

  const signupInbound: IXInboundSignup = {
    email: email,
    username: username,
    password: password,
    confirmPassword: confirmPassword
  }

  try {
    console.log(SERVER_URL + signupEndpoint)
    console.log('signupInbound', signupEndpoint)
    const response = await fetch(SERVER_URL + signupEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(signupInbound)
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

export { signup }