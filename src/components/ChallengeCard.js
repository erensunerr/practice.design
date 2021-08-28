import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {BodyText, Subtitle} from './Typography';
import Card from './Card';
import TextButton from './TextButton';
import CategoriesSelector from './CategoriesSelector';
import Option from './Option';
import FigmaImage from './FigmaImage';


/**
 * Specialized Card for a challenge.
 */
function ChallengeCard(props) {
  return (
    <Card>
      <Subtitle>{props.title}</Subtitle>
      <Option {...props.by}/>
      <FigmaImage {...props.img}/>
      <CategoriesSelector categories={props.categories} />
      <TextButton text='accept the challenge' onClick={props.onClick}/>
    </Card>
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
  onClick: propTypes.onClick,
};

export default ChallengeCard;
