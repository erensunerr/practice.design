import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import FigmaOverview from '../../static/figma_overview.svg';

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
      src={props.src || FigmaOverview}
      alt={'image for the associated challenge'}
    />
  );
}

FigmaImage.propTypes = {
  /**
   * optionally provide a source image
   */
  src: propTypes.string,
};

export default FigmaImage;
