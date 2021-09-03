import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Typography from '../../atoms/Typography';
import Card from '../../atoms/Card';
import FigmaImage from '../../atoms/FigmaImage';
import Option from '../../atoms/Option';
import TextButton from '../../atoms/Button/TextButton';


const CardOptionStyles = styled(Option)`
  text-align: right;
`;

const SolutionCardStyles = styled(Card)`
`;

// TODO: process username to 'solved by @username' in this component

/**
 * Specialized card for solution.
 */
function SolutionCard({title, img, by, ...oP}) {
  return (
    <SolutionCardStyles {...oP}>
      <Typography.BodyText>{title}</Typography.BodyText>
      <FigmaImage {...img} />
      <CardOptionStyles {...by} />
      <TextButton text='I wanna try it too' />
    </SolutionCardStyles>
  );
}

SolutionCard.propTypes = {
  title: propTypes.string,
  /**
   * Spread to Option.
   */
  by: propTypes.object,
  /**
   * Spread to FigmaImage.
   */
  img: propTypes.object,
};

export default SolutionCard;
