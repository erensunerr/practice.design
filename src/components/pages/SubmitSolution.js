import React from 'react';
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
  const challenge = getChallengeById(challengeId);
  return (
    <section {...oP}>
      <Typography.Title>
        Submit a Solution for {challenge.title}
      </Typography.Title>
      <SubmitSolutionForm
        challenge={challenge}
      />
    </section>
  );
}

// TODO: write propTypes for SubmitSolution
SubmitSolution.propTypes = {
};

export default SubmitSolution;
