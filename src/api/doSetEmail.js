import {getAuth, updateProfile} from 'firebase/auth';

/**
 * sets email
 */
function doSetEmail(email, errorSetters) {
  const auth = getAuth();
  updateProfile(auth.currentUser,
      {email: email},
  ).then(
      () => {
        errorSetters.info(`I'll still send emails lol`);
      },
  ).catch(
      (e) => {
        console.log(e);
      },
  );
}

export default doSetEmail;
