import {getAuth, updateProfile} from 'firebase/auth';

/**
 * updates user info
 */
function doUpdateUser(data) {
  const auth = getAuth();
  console.log('user updated with: ', data);
  updateProfile(auth.currentUser, data).catch((error) => {
    // TODO: deal with errors
  });
}

export default doUpdateUser;
