import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Typography from '../Typography';
import Button from './Button';

/**
 * Specialized Button, props except text are spread to Button.
 */
function TextButton({text, children, ...oP}) {
  return (
    <Button {...oP}>
      <Typography.BodyText>{children || text}</Typography.BodyText>
    </Button>
  );
}

TextButton.propTypes = {
  text: propTypes.string,
  children: propTypes.node,
};

const StyledTextButton = styled(TextButton)``;

export default StyledTextButton;
