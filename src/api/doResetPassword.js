
/**
 * reset password
 * @param {string} email
 * @param {object} errorSetters
 */
function doResetPassword(email, errorSetters) {
  console.log('Reset password with ', email);
  errorSetters.email('Mock Error :(');
}

export default doResetPassword;
