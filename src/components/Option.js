import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {BodyText} from './Typography';

// IDEA: add disabled state

const OptionStyles = styled.button`
  display: inline-block;
  border: none;
  color: ${(props) => props.theme.colors.dark};
  text-decoration: underline;
  white-space: nowrap;
  background-color: transparent;
  &:hover, &:focus-visible {
    cursor: pointer;
    text-decoration-thickness: 2px;
    outline: none;
  }
`;

/**
 * Basically a button that looks like a link.
 * Should be used to reveal optionally additional information.
 * Or redirect to some place.
 * All props except text are spread to the button element
 */
function Option({text, ...otherProps}) {
  return (
    <OptionStyles {...otherProps}>
      <BodyText>{text}</BodyText>
    </OptionStyles>
  );
}

Option.propTypes = {
  text: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

export default Option;
