/**
 * This is an interface for the responses for the login, signup, and reset password endpoints
 */

type XOutboundLogin = {
  token?: string
}

type XOutboundSignup = {
  token?: string
}

type XOutboundResetPassword = {
  token?: string
}

type XOutboundAuthError = {
  statusCode?: number,
  message?: string
}

type XOutboundToken = XOutboundLogin | XOutboundSignup | XOutboundResetPassword | XOutboundAuthError | undefined
export { XOutboundLogin, XOutboundAuthError, XOutboundResetPassword, XOutboundSignup, XOutboundToken }