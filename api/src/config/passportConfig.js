exports.clientID = process.env['AZURECONFIG_CLIENTID']
exports.clientSecret = process.env['AZURECONFIG_CLIENTSECRET']
exports.responseType = 'id_token'
exports.responseMode = 'form_post'
exports.redirectUrl = process.env['AZURECONFIG_CALLBACKURI']
exports.passReqToCallback = true
exports.scope = ''
exports.validateIssuer = true
//exports.resourceURL = 'https://graph.microsoft.com'
exports.useCookieInsteadOfSession = false
const key1 = process.env['PASSPORTCOOKIE_KEY1']
const key2 = process.env['PASSPORTCOOKIE_KEY2']
const key3 = process.env['PASSPORTCOOKIE_KEY3']
const key4 = process.env['PASSPORTCOOKIE_KEY4']
const passportkey1 = { key: key1, iv: key3 }
const passportkey2 = { key: key2, iv: key4 }
exports.cookieEncryptionKeys = [passportkey1, passportkey2]
exports.nonceLifetime = 36000
exports.isB2C = true
exports.tenantIdOrName = "msgroveb2c.onmicrosoft.com"

if (process.env['NODE_ENV'] === 'production') {
  exports.identityMetadata =
    'https://login.microsoftonline.com/common/.well-known/openid-configuration'
  exports.tokenURI = `https://login.microsoftonline.com/common/oauth2/token`
  exports.logoutURL = `https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri=http:\\\\basta.nais.io:8080`
  exports.allowHttpForRedirectUrl = false
  exports.loggingLevel = 'error'
} else if (process.env['NODE_ENV'] === 'development') {
  exports.identityMetadata =
    'https://msgroveb2c.b2clogin.com/msgroveb2c.onmicrosoft.com/.well-known/openid-configuration?p=B2C_1_exampleApp_signing' //B2C_1_Email-Signup'
  exports.tokenURI = `https://msgroveb2c.b2clogin.com/msgroveb2c.onmicrosoft.com/oauth2/authresp` //`https://login.microsoftonline.com/common/oauth2/token`
  exports.logoutURL = `https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri=http:\\\\localhost:8080`
  exports.allowHttpForRedirectUrl = true
  exports.loggingLevel = 'debug'
} else {
  exports.identityMetadata =
  'https://login.microsoftonline.com/common/.well-known/openid-configuration'
  exports.tokenURI = `https://login.microsoftonline.com/common/oauth2/token`
  exports.logoutURL = `https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri=http:\\\\localhost:8080`
  exports.allowHttpForRedirectUrl = true
  exports.loggingLevel = 'debug'
}
