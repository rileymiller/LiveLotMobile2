/**
* Inbound type for signup/ endpoint
 */
interface IXInboundSignup {
  email: string,
  password: string,
  confirmPassword: string,
  username: string
}

export { IXInboundSignup }
