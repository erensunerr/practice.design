import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Typography from './Typography';

const InputStyles = styled.input`
    padding: .5rem;
    border: 1px solid ${(props) => props.theme.colors.dark };
    &:focus-visible {
      box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.dark};
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
      <Typography.SmallText>{label}</Typography.SmallText>
      <InputStyles
        placeholder={label}
        autoComplete={label}
        {...otherProps}
      />
      <Typography.SmallText>{error}</Typography.SmallText>
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
