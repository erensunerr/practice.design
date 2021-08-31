import {getAuth, updatePassword} from 'firebase/auth';

/**
 * sets username
 */
function doUpdateUsername(pass, errorSetters) {
  const auth = getAuth();
  updatePassword(auth.currentUser,
      pass,
  ).then(
      () => {
        errorSetters.info(`🎉 password changed`);
      },
  ).catch(
      (e) => {
        console.log(e);
      },
  );
}

export default doUpdateUsername;
