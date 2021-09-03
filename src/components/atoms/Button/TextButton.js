import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Typography from '../Typography';
import Button from './Button';

/**
 * Specialized Button, props except text are spread to Button.
 */
function TextButton({text, children, ...otherProps}) {
  return (
    <Button {...otherProps}>
      <Typography.BodyText>{children || text}</Typography.BodyText>
    </Button>
  );
}

TextButton.propTypes = {
  text: propTypes.string,
  children: propTypes.node,
};

export default TextButton;
