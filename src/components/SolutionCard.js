import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {BodyText} from './Typography';
import Card from './Card';
import FigmaImage from './FigmaImage';
import Option from './Option';
import TextButton from './TextButton';


// TODO: process username to
// 'solved by @username' in this component

/**
 * Specialized card for solution.
 */
function SolutionCard(props) {
  return (
    <Card>
      <BodyText>{props.title}</BodyText>
      <FigmaImage {...props.image} />
      <Option {...props.by}></Option>
      <TextButton text='I wanna try it too' />
    </Card>
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
  image: propTypes.object,
};

export default SolutionCard;
