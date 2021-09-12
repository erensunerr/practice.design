import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Typography from '../../atoms/Typography';
import Card from '../../atoms/Card';
import TextButton from '../../atoms/Button/TextButton';
import CategoriesSelector from '../CategoriesSelector';
import Option from '../../atoms/Option';
import FigmaImage from '../../atoms/FigmaImage';
import {useHistory} from 'react-router-dom';
import {updateUserData} from '../../../api/user';
import useUser from '../../useUser';

const CardOptionStyles = styled(Option)`
  text-align: right;
`;

const ChallengeCardStyles = styled(Card)`
`;

/**
 * Specialized Card for a challenge.
 */
function ChallengeCard({challenge, sendToSolve, ...oP}) {
  const history = useHistory();
  const {user} = useUser();
  const isAccepted = user?.activeChallenges.find(
      (c) => c.id === challenge.id,
  ) != null;

  return (
    <ChallengeCardStyles {...oP}>
      <Typography.BodyText>{challenge.title}</Typography.BodyText>
      <CardOptionStyles
        text={`by @${challenge.by.username}`}
        onClick={
          () => {
            history.push(`/user/${challenge.by.uid}`);
          }
        }
      />
      <TextButton
        text={ isAccepted ? 'go to figma' : 'accept the challenge'}
        onClick={
          () => {
            if (!isAccepted) {
              console.log('accepted challenge', user);
              user.activeChallenges.push(challenge);
              updateUserData(user);
              history.push(`/my_challenges`);
            } else {
              history.push(challenge.figmaUrl);
            }
          }
        }/>
    </ChallengeCardStyles>
  );
}

ChallengeCard.propTypes = {
  challenge: propTypes.object,
  sendToSolve: propTypes.bool,
};

export default ChallengeCard;
