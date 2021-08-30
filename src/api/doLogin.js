import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

/**
 * conventional login
 * @param {string} email
 * @param {string} pass
 * @param {object} errorSetters
 */
function doLogin(email, pass, errorSetters) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, pass).catch(
      (error) => {
        if (error.code === 'auth/invalid-email') {
          errorSetters.email('your email not an email');
        }
        if (error.code === 'auth/user-disabled') {
          errorSetters.login(
              `you're a bad person. no bad people allowed here 👹`,
          );
        }
        if (error.code === 'auth/user-not-found') {
          errorSetters.email(
              'you gotta sign up before you log in, bruh',
          );
        }
        if (error.code === 'auth/wrong-password') {
          errorSetters.pass(
              'your password is wrong, but cats are cute',
          );
        }
      },
  );
}

export default doLogin;
