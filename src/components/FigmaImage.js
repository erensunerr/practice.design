import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {BodyText} from './Typography';
import FigmaOverview from '../static/figma_overview.svg';

export const ImgStyles = styled.img`
  width: 100%;
  aspect-ratio: 1.618 / 1;
  border-radius: .5rem;
  object-fit: cover;
`;

/**
 * this is the associated image for a challenge
 */
function FigmaImage(props) {
  return (
    <ImgStyles
      src={FigmaOverview}
      alt={'image for the associated challenge'}
    />
  );
}

FigmaImage.propTypes = {
};

export default FigmaImage;
