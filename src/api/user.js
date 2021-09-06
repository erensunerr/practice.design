import {doc, setDoc, getDoc, getFirestore} from 'firebase/firestore';


/**
 * user constructor
 */
export default function User(
    {uid, username, socials, challenges, solutions, auth},
) {
  console.log('creating new user called @', username);
  return (
    {
      uid: uid || '',
      username: username || null,
      socials: socials || [],
      challenges: challenges || [],
      solutions: solutions || [],
    }
  );
}
;

/**
 * supply uid to get the full user
 */
export async function getUserByUid(uid) {
  if (!uid) {
    throw new Error('you need to pass a uid');
  }
  const db = getFirestore();

  const d = await getDoc(
      doc(db, 'users', uid),
  ).catch(
      (e) => console.log('get doc error: ', e),
  );


  let user;
  if (d.exists()) {
    user = new User(
        {
          uid,
          ...d.data(),
        },
    );
  } else {
    user = new User(
        {
          uid,
        },
    );
    updateUserData(user);
  }

  console.log('getUserByUid doc: ', d, d.data());
  return user;
}

/**
 * just supply a user with the changed data
 * uid must be supplied.
 */
export async function updateUserData(newUserData) {
  const db = getFirestore();
  console.log('updating user with', newUserData);
  if (newUserData.uid) {
    await setDoc(
        doc(db, 'users', newUserData.uid),
        newUserData,
        {
          merge: true,
        },
    ).catch(
        (e) => console.log('update user error: ', e),
    );
  } else {
    throw new Error('your user gotta have a uid bruv');
  }
}
