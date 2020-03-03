/**
* Inbound type for resetPassword/ endpoint
 */
interface IXInboundResetPassword {
  email: string,
  password: string,
  newPassword: string,
  confirmNewPassword: string
}

export { IXInboundResetPassword }
