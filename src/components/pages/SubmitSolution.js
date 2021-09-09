import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {useParams} from 'react-router-dom';

import Typography from '../atoms/Typography';
import SubmitSolutionForm from '../sections/SubmitSolutionForm';
import {getChallengeById} from '../../api/challenge';

/**
 * let them submit solutions lol
 */
function SubmitSolution({...oP}) {
  const {challengeId} = useParams();
  const [challenge, setChallenge] = useState(null);
  useEffect(
      async () => {
        try {
          setChallenge(await getChallengeById(challengeId));
        } catch {
          console.log(
              `challenge you are trying to submit 
               a solution for is not found :(((`,
          );
        }
      }, [challengeId],
  );

  return (
    <section {...oP}>
      {
      challenge ?
      <>
        <Typography.Title>
        Submit a Solution for {challenge.title}
        </Typography.Title>
        <SubmitSolutionForm
          challenge={challenge}
        />
      </> :
      <Typography.BodyText>challenge is not found :((</Typography.BodyText>
      }

    </section>
  );
}

// TODO: write propTypes for SubmitSolution
SubmitSolution.propTypes = {
};

export default SubmitSolution;
