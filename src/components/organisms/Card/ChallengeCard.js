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


const CardOptionStyles = styled(Option)`
  text-align: right;
`;

const ChallengeCardStyles = styled(Card)`
`;

/**
 * Specialized Card for a challenge.
 */
function ChallengeCard({challenge, ...oP}) {
  const history = useHistory();
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
      <TextButton text='accept the challenge' onClick={
        () => {
          history.push(`/challenge/${challenge.id}`);
        }
      }/>
    </ChallengeCardStyles>
  );
}

ChallengeCard.propTypes = {
  challenge: propTypes.object,
};

export default ChallengeCard;
