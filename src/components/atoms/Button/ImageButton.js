import React from 'react';
import propTypes from 'prop-types';

import Typography from '../Typography';
import Button from './Button';

/**
 * Specialized button featuring an image and text
 */
function ImageButton({img, text, ...oP}) {
  // assumes decorative image by default
  const Img = <img alt='' {...img}/>;
  return (
    <Button {...oP}>
      {Img} <Typography.BodyText>{text}</Typography.BodyText> {Img}
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
