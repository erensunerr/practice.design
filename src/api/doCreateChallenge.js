import User, {updateUserData} from './user';
import Challenge, {updateChallengeData} from './challenge';

/**
 *
 */
async function doCreateChallenge(pC, pU) {
  console.log('creating challenge with', pC, pU);
  // copy the passed objects
  const challenge = {};
  Object.assign(challenge, pC);
  const user = {};
  Object.assign(user, pU);

  // change the objects
  challenge.by = {
    uid: user.uid,
    username: user.username,
  };
  const challengeId = await updateChallengeData(challenge);
  user.challenges.push(
      challengeId,
  );
  updateUserData(user);
}

export default doCreateChallenge;
