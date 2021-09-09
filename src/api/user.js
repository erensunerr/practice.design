import {doc, setDoc, getDoc, getFirestore} from 'firebase/firestore';


/**
 * user constructor
 */
export default function User(
    {
      uid,
      username,
      socials,
      challenges,
      activeChallenges,
      solutions,
      userInterviews,
    },
) {
  return (
    {
      uid: uid || '',
      username: username || null,
      socials: socials || [],
      challenges: challenges || [],
      activeChallenges: activeChallenges || [],
      solutions: solutions || [],
      userInterviews: userInterviews || false,
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
      (e) => {},
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

  return user;
}

/**
 * just supply a user with the changed data
 * uid must be supplied.
 */
export async function updateUserData(newUserData) {
  const db = getFirestore();
  if (newUserData.uid) {
    await setDoc(
        doc(db, 'users', newUserData.uid),
        newUserData,
        {
          merge: true,
        },
    ).catch(
        (e) => {},
    );
  } else {
    throw new Error('your user gotta have a uid bruv');
  }
}
