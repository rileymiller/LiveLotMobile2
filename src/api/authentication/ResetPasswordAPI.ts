import { XOutboundResetPassword } from 'api/authentication/XOutboundToken'
import { IXInboundResetPassword } from 'api/user/XInboundResetPassword'
import { SERVER_URL } from 'react-native-dotenv'

/**
* This method will return a promise with a jwt on successful reset of password and an
* error on an unsuccessful reset
* 
* The reset password endpoint is located at https://github.com/maddiearogers/LiveLotAppAPI/blob/master/api/controllers/userCtrl.js 
* under the resetPassword export
* 
* @param email the user email
* @param password the user password
* @param newPassword the new password
* @param confirmNewPassword confirming new password
*/
const resetPassword = async (email: string, password: string, newPassword: string, confirmNewPassword: string): Promise<XOutboundResetPassword> => {
  const resetPasswordEndpoint = '/resetPassword'

  const resetPasswordInbound: IXInboundResetPassword = {
    email: email,
    password: password,
    newPassword: newPassword,
    confirmNewPassword: confirmNewPassword
  }

  console.log(SERVER_URL + resetPasswordEndpoint)
  console.log('signupInbound', resetPasswordEndpoint)
  const response = await fetch(SERVER_URL + resetPasswordEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(resetPasswordInbound)
  })

  if (!response.ok) {
    const json = await response.json()

    throw Error(`${response.status} Error: ${json.message}`)
  }

  const body = await response.json()

  return body
}

export { resetPassword }