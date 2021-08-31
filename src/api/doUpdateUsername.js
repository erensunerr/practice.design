import {getAuth, updateProfile} from 'firebase/auth';

/**
 * sets username
 */
function doUpdateUsername(username, errorSetters) {
  const auth = getAuth();
  updateProfile(auth.currentUser,
      {displayName: username},
  ).then(
      () => {
        errorSetters.info(`🎉 you're now ${username}`);
      },
  ).catch(
      (e) => {
        console.log(e);
      },
  );
}

export default doUpdateUsername;
