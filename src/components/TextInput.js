import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {SmallText} from './Typography';

const InputStyles = styled.input`
    padding: .5rem;
    border: 1px solid ${(props) => props.theme.colors.dark };
    &:focus-visible {
        border-width: 2px;
        outline: none;
    }
`;

export const TextInputStyles = styled.div`
  display: flex;
  flex-flow: column;
  gap: .25rem;
`;

/**
 * Textual input.
 */
function TextInput({label, error, ...otherProps}) {
  return (
    <TextInputStyles>
      <SmallText>{label}</SmallText>
      <InputStyles
        placeholder={label}
        {...otherProps}
      />
      <SmallText>{error}</SmallText>
    </TextInputStyles>
  );
}


TextInput.propTypes = {
  /**
   * all props except label are spread to the input
   */
  label: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  type: propTypes.string,
  error: propTypes.string,
};

export default TextInput;
