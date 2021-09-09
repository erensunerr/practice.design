import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {useHistory} from 'react-router-dom';


import Typography from '../atoms/Typography';
import useUser from '../useUser';
import CardGrid from '../sections/CardGrid';
import ChallengeCard from '../organisms/Card/ChallengeCard';
import SolutionCard from '../organisms/Card/SolutionCard';
import useAuthRedirect from '../useAuthRedirect';
import {getChallengeById} from '../../api/challenge';
import {getSolutionById} from '../../api/solution';
import TextButton from '../atoms/Button/TextButton';
import Option from '../atoms/Option';

/**
 * My challenges page
 */
function MyChallenges({...oP}) {
  useAuthRedirect(true);
  const {user, isWaiting} = useUser();
  const [activeChallenges, setActiveChallenges] = useState([]);
  const [solutions, setSolutions] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const history = useHistory();

  // useEffect( // resolve active challenge ids into full challenge objects
  //     async () => {
  //       if (!isWaiting) {
  //         const aC = await Promise.all(
  //             user.activeChallenges.map(
  //                 async (id) => await getChallengeById(id),
  //             ),
  //         );
  //         setActiveChallenges(aC);
  //       }
  //     }, [user],
  // );
  console.log(activeChallenges);
  useEffect( // set solutions
      async () => {
        if (user) {
          const s = await Promise.all(user.solutions.map(
              async (id) => await getSolutionById(id),
          ));
          console.log(s);
          setSolutions(s);
        }
      }, [user],
  );
  console.log(solutions);

  useEffect( // challenges
      async () => {
        if (user) {
          const c = await Promise.all(user.challenges.map(
              async (id) => await getChallengeById(id),
          ));
          console.log(c);
          setChallenges(c);
        }
      }, [user],
  );

  return (
    <section {...oP}>
      <Typography.Title>
        my challenges
      </Typography.Title>
      {/* {// active challenges
        activeChallenges &&
        <>
          <Typography.Subtitle>
            active challenges
          </Typography.Subtitle>
          <CardGrid>
            {
              activeChallenges.map(
                  (c, i) => <ChallengeCard key={i} challenge={c} />,
              )
            }
          </CardGrid>
        </>
      } */}
      <div>
        {// solutions
          solutions.length ?
          <>
            <Typography.Subtitle>
              solved challenges
            </Typography.Subtitle>
            <CardGrid>
              {
                solutions.map(
                    (c, i) => <SolutionCard key={i} solution={c} />,
                )
              }
            </CardGrid>
          </> :
          null
        }
      </div>
      <div>
        {// challenges
        challenges.length ?
        <>
          <Typography.Subtitle>
            challenges by you
          </Typography.Subtitle>
          <CardGrid>
            {
              challenges.map(
                  (c, i) => <ChallengeCard key={i} challenge={c}/>,
              )
            }
          </CardGrid>
        </>:
        null
        }
        <Option text='+ create a challenge' onClick={
          () => history.push('/create')
        }/>
      </div>


    </section>
  );
}

// TODO: write propTypes for MyChallenges
MyChallenges.propTypes = {
};

const StyledMyChallenges = styled(MyChallenges)`
  display: flex;
  flex-flow: column;
  gap: 8rem;
  & > div {
    row-gap: 2rem;
    display: flex;
    flex-flow: column;
  }
`;

export default StyledMyChallenges;
