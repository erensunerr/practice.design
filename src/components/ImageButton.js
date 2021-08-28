import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {defaultTheme} from './styles';
import {BodyText} from './Typography';
import Button from './Button';

/**
 * Specialized button featuring an image and text
 * all props except img are spread to the Button element
 */
function ImageButton({img, text, ...toButton}) {
  // assumes decorative image by default
  const Img = <img alt='' {...img}/>;
  return (
    <Button {...toButton}>
      {Img} <BodyText>{text}</BodyText> {Img}
    </Button>
  );
}

ImageButton.propTypes = {
  /**
   * spread to the img element
   */
  img: propTypes.object,
  text: propTypes.string,
  onClick: propTypes.func,
};

export default ImageButton;
