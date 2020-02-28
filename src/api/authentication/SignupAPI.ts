import { XOutboundToken, XOutboundSignup } from 'api/authentication/XOutboundToken'
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
const signup = async (email: string, username: string, password: string, confirmPassword: string): Promise<XOutboundSignup> => {
  const signupEndpoint = '/signup'

  const signupInbound: IXInboundSignup = {
    email: email,
    username: username,
    password: password,
    confirmPassword: confirmPassword
  }

  console.log(SERVER_URL + signupEndpoint)
  console.log('signupInbound', signupEndpoint)
  const response = await fetch(SERVER_URL + signupEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(signupInbound)
  })

  if (!response.ok) {
    const json = await response.json()

    throw Error(`${response.status} Error: ${json.message}`)
  }

  const body = await response.json()

  return body

}

export { signup }