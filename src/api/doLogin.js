
/**
 * conventional login
 * @param {string} email
 * @param {string} pass
 * @param {object} errorSetters
 */
function doLogin(email, pass, errorSetters) {
  console.log('Login with', email, pass);
  errorSetters.email('Mock email error :(');
  errorSetters.pass('Mock password error :(');
}

export default doLogin;
