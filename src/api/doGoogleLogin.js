import {getAuth, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth';

/**
 * do login with google lolz
 * @param {object} errorSetters
 */
function doGoogleLogin(errorSetters) {
  console.log('doing google login');
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithRedirect(auth, provider).catch(
      (error) => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          errorSetters.toast(
              'You have an account with the regular login. Please use that.',
          );
        }
      });
}

export default doGoogleLogin;
