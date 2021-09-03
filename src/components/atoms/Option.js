import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Typography from './Typography';
import focusVisible from '../utils/focusVisible';

// IDEA: add disabled state

const OptionStyles = styled.button`
  display: inline-block;
  border: none;
  text-decoration: underline;
  white-space: nowrap;
  background-color: transparent;
  &:hover, ${focusVisible(true)}
`;

/**
 * Basically a button that looks like a link.
 * Should be used to reveal optionally additional information.
 * Or redirect to some place.
 * All props except text are spread to the button element
 */
function Option({text, children, ...oP}) {
  return (
    <OptionStyles {...oP}>
      {children ||
        <Typography.BodyText>{text}</Typography.BodyText>
      }
    </OptionStyles>
  );
}

Option.propTypes = {
  /**
   * you can use children too
   */
  text: propTypes.string,
  onClick: propTypes.func.isRequired,
  children: propTypes.node,
};

export default Option;
