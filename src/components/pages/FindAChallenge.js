import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Typography from '../atoms/Typography';
import useUser from '../useUser';
import useAuthRedirect from '../useAuthRedirect';
import CardGrid from '../sections/CardGrid';
import {getChallenges} from '../../api/challenge';
import ChallengeCard from '../organisms/Card/ChallengeCard';

/**
 * let them find thine challenges
 */
function FindAChallenge({...oP}) {
  useAuthRedirect(true);
  const {user} = useUser();

  const [challenges, setChallenges] = useState([]);
  useEffect(
      async () => {
        setChallenges(
            await getChallenges(),
        );
        console.log('find a challenge acquired some challenges');
      },
      [],
  );

  return (
    <section {...oP}>
      <Typography.Title>
        find a challenge
      </Typography.Title>
      <CardGrid>
        {
          challenges &&
          challenges.map(
              (c) => <ChallengeCard key={c.id} challenge={c} />,
          )
        }
      </CardGrid>
    </section>
  );
}

FindAChallenge.propTypes = {
};

FindAChallenge = styled(FindAChallenge)`
  gap: 8rem;
  display: flex;
  flex-flow: column;
`;

export default FindAChallenge;
