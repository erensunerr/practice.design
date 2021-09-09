import
{doc, addDoc, getDoc, collection, getFirestore, Timestamp}
  from 'firebase/firestore';

/**
 * constructor for solution
 */
export default function Solution(
    {
      challenge,
      by,
      figmaUrl,
      lastUpdated,
    },
) {
  return (
    {
      challenge: {
        id: challenge && challenge.id || '',
        title: challenge && challenge.title || '',
      },
      by: {
        uid: by && by.uid || '',
        username: by && by.username || '',
      },
      figmaUrl: figmaUrl || '',
      lastUpdated: Timestamp.now(),
    }
  );
}

/**
 * commits solution data to firestore
 */
export async function updateSolutionData(newSolutionData) {
  const db = getFirestore();
  if (!newSolutionData.by.uid) {
    throw new Error('your solution gotta have a uid bruv');
  }
  if (!newSolutionData.challenge.id) {
    throw new Error('your challenge gotta have a challenge id bruv');
  } else {
    const docRef = await addDoc(
        collection(db, 'solutions'),
        newSolutionData,
        {
          merge: true,
        },
    ).catch(
        (e) => console.log('update solution error: ', e),
    );
    return docRef.id;
  }
}

/**
 * gets solutions by user id
 */
export async function getSolutionById(id) {
  console.log('IN GSBID ', id);
  if (!id) {
    throw new Error('you need to pass an id');
  }
  const db = getFirestore();

  const d = await getDoc(
      doc(db, 'solutions', id),
  ).catch(
      (e) => console.log('get doc error: ', e),
  );
  console.log('d', d);
  let solution;
  if (d.exists()) {
    solution = new Solution(
        {
          ...d.data(),
          id,
        },
    );
  } else {
    throw new Error('solution not found');
  }
  console.log('SOLUTION: ', solution);
  return solution;
}
