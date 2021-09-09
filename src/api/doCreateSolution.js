import Solution, {updateSolutionData} from './solution';
import User, {updateUserData} from './user';


/**
 * create a solution.
 */
async function doCreateSolution(pS, pC, pU) {
  const solution = {};
  Object.assign(solution, pS);
  const challenge = {};
  Object.assign(challenge, pC);
  const user = {};
  Object.assign(user, pU);

  solution.by = {
    uid: user.uid,
    username: user.username,
  };

  solution.challenge = {
    id: challenge.id,
    title: challenge.title,
  };
  const solutionId = await updateSolutionData(solution);
  user.solutions.push(
      solutionId,
  );

  // remove the challenge from actives list
  user.activeChallenges.filter(
      (c) => c.id != challenge.id,
  );
  console.log(user);
  updateUserData(user);
}

export default doCreateSolution;
