import {getAuth, sendPasswordResetEmail} from 'firebase/auth';
/**
 * reset password
 * @param {string} email
 * @param {object} errorSetters
 */
function doResetPassword(email, errorSetters) {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
      .then(() => {
        errorSetters.toast(
            'password reset email is sent. almost practice time ⚽️',
        );
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          errorSetters.forgotPassword(`that's not a real email bruh`);
        }
        if (error.code === 'auth/user-not-found') {
          errorSetters.forgotPassword(
              `who tries to reset their non-existant account's password? you`,
          );
        }
      });
}

export default doResetPassword;
