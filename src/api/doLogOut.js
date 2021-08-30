import {getAuth, signOut} from 'firebase/auth';
/**
 * log out lmao
 */
function doLogOut() {
  const auth = getAuth();
  signOut(auth).catch(
      (error) => {
        console.log('log out error');
      },
  );
}

export default doLogOut;
