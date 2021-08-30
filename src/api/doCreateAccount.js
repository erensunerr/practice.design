import {getAuth, createUserWithEmailAndPassword}
  from 'firebase/auth';

import doSetUsername from './doSetUsername';

/**
 * create an account
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @param {object} errorSetters
 */
function doCreateAccount(username, email, pass, errorSetters) {
  const auth = getAuth();
  if (username === '') {
    errorSetters.username('you need a username');
  }
  createUserWithEmailAndPassword(auth, email, pass).then(
      () => {
        doSetUsername(username);
      },
  )
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          errorSetters.email('you already used that email. 😿');
        }
        if (error.code === 'auth/invalid-email') {
          errorSetters.email('your email is not an email');
        }
        if (error.code === 'auth/weak-password') {
          errorSetters.pass(
              'your password gotta do some push ups to get stronger',
          );
        }
      });
}

// TODO: turn errorSetters into an event class that fires a toast on success

export default doCreateAccount;
