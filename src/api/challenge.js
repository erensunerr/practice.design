import
{
  doc,
  addDoc,
  getDoc,
  getDocs,
  getFirestore,
  Timestamp,
  query,
  orderBy,
  collection,
}
  from 'firebase/firestore';


/**
 * user constructor
 */
export default function Challenge(
    {id, title, figmaUrl, by, lastUpdated},
) {
  return (
    {
      id: id,
      title: title || '',
      figmaUrl: figmaUrl || null,
      by: {
        uid: by && by.uid || '',
        username: by && by.username || '',
      },
      lastUpdated: lastUpdated || Timestamp.now(),
    }
  );
}
;

/**
 * supply id to get the full challenge
 */
export async function getChallengeById(id) {
  if (!id) {
    throw new Error('you need to pass a challenge id');
  }
  const db = getFirestore();

  const d = await getDoc(
      doc(db, 'challenges', id),
  ).catch(
      (e) => console.log('get doc error: ', e),
  );

  let challenge;
  if (d.exists()) {
    challenge = new Challenge(
        {
          ...d.data(),
          id,
        },
    );
  } else {
    throw new Error('challenge not found');
  }

  console.log('getChallengeById doc: ', challenge);
  return challenge;
}

/**
 * just supply a challenge with the changed data
 * id must be supplied.
 */
export async function updateChallengeData(newChallengeData) {
  const db = getFirestore();
  const {id, ...toSubmit} = newChallengeData;
  if (toSubmit.by.uid) {
    const docRef = await addDoc(
        collection(db, 'challenges'),
        toSubmit,
        {
          merge: true,
        },
    ).catch(
        (e) => console.log('update challenge error: ', e),
    );
    return docRef.id;
  } else {
    throw new Error('your challenge gotta have a uid bruv');
  }
}

/**
 * used to query challenges **not working**
 */
export async function getChallenges() {
  const db = getFirestore();
  const q = query(
      collection(db, 'challenges'),
      orderBy('lastUpdated'),
  );
  const d = await getDocs(
      q,
  ).catch(
      (e) => console.log('get doc error: ', e),
  );

  // turn firebase documents (💩) into actual challenges (⭐️)
  const challenges = d.docs.map(
      (c) => (
        new Challenge({id: c.id, ...c.data()})
      ),
  );
  console.log(
      challenges,
  );
  return challenges;
}
