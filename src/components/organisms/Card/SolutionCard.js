import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Typography from '../../atoms/Typography';
import Card from '../../atoms/Card';
import Option from '../../atoms/Option';
import TextButton from '../../atoms/Button/TextButton';
import {useHistory} from 'react-router-dom';

const CardOptionStyles = styled(Option)`
  text-align: right;
`;

const SolutionCardStyles = styled(Card)`
`;

// TODO: process username to 'solved by @username' in this component

/**
 * Specialized card for solution.
 */
function SolutionCard({solution, ...oP}) {
  const history = useHistory();
  console.log('creating solution card with', solution);
  return (
    <SolutionCardStyles {...oP}>
      <Typography.BodyText>{solution.challenge.title}</Typography.BodyText>
      <CardOptionStyles
        text={`solved by @${solution.by.username}`}
        onClick={
          () => {
            history.push(`/user/${solution.by.uid}`);
          }
        } />
      <TextButton
        text='see figma'
        onClick={
          () => {
            history.push(`${solution.figmaUrl}`);
          }
        }/>
    </SolutionCardStyles>
  );
}

SolutionCard.propTypes = {
  solution: propTypes.object,
};

export default SolutionCard;
