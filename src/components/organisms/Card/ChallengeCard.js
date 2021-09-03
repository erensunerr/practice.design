import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Typography from '../../atoms/Typography';
import Card from '../../atoms/Card';
import TextButton from '../../atoms/Button/TextButton';
import CategoriesSelector from '../CategoriesSelector';
import Option from '../../atoms/Option';
import FigmaImage from '../../atoms/FigmaImage';


const CardOptionStyles = styled(Option)`
  text-align: right;
`;

const ChallengeCardStyles = styled(Card)`
`;

/**
 * Specialized Card for a challenge.
 */
function ChallengeCard({title, by, img, categories, onStart, ...oP}) {
  return (
    <ChallengeCardStyles {...oP}>
      <Typography.Subtitle>{title}</Typography.Subtitle>
      <CardOptionStyles {...by}/>
      <FigmaImage {...img}/>
      <CategoriesSelector categories={categories} />
      <TextButton text='accept the challenge' onClick={onStart}/>
    </ChallengeCardStyles>
  );
}

ChallengeCard.propTypes = {
  /**
   * Spread to FigmaImage.
   */
  img: propTypes.object,
  title: propTypes.string,
  /**
   * spread to option
   */
  by: propTypes.object,
  /**
   * goes to categories selector
   */
  categories: propTypes.array,
  /**
   * onClick of the start button
   */
  onStart: propTypes.onClick,
};

export default ChallengeCard;
