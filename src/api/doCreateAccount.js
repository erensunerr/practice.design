
/**
 * create an account
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @param {object} errorSetters
 */
function doCreateAccount(username, email, pass, errorSetters) {
  console.log('Account created: ', username, email, pass);
  errorSetters.username('Mock username error :(');
  errorSetters.email('Mock email error :(');
  errorSetters.pass('Mock password error :(');
}

// TODO: turn errorSetters into an event class that fires a toast on success

export default doCreateAccount;
