import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {BodyText} from './Typography';
import Button from './Button';

// TODO: turn the text prop into array to display a different label every time

/**
 * Specialized Button, props except text are spread to Button.
 */
function TextButton({text, ...otherProps}) {
  return (
    <Button {...otherProps}>
      <BodyText>{text}</BodyText>
    </Button>
  );
}

TextButton.propTypes = {
  text: propTypes.string.isRequired,
};

export default TextButton;
