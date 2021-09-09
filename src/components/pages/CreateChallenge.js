import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Typography from '../atoms/Typography';
import CreateChallengeForm from '../sections/CreateChallengeForm';


/**
 * create challenge page
 */
function CreateChallenge({...oP}) {
  return (
    <section {...oP}>
      <Typography.Title>
        create a challenge
      </Typography.Title>
      <CreateChallengeForm />
    </section>
  );
}

CreateChallenge.propTypes = {
};

export default styled(CreateChallenge)`
  width: 50%;
  margin: auto;
`;
