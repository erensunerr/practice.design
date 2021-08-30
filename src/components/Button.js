import React, {useState} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {BodyText, SmallText} from './Typography';

// TODO: come up with a way to style hover without making mobile bad
//        Option also needs this (maybe common component)
//        -> theme var for touchscreen

const ButtonStyles = styled.button`
    display: flex;
    align-items: center;
    background: transparent;
    justify-content: ${

  // spacing based on children length
  (props) => props.children.length > 1 ?
    'space-between' :
    'space-around'
};

    padding: 1rem 1.5rem;
    border: 1px solid ${(props) => props.theme.colors.dark};
    border-radius: .5rem;
    width: 100%;
    &:focus-visible {
        outline: none;
    }
`;

const DisabledButtonStyles = styled(ButtonStyles)`
    cursor: not-allowed;
    opacity: 0.5;
`;

const EnabledButtonStyles = styled(ButtonStyles)`
    cursor: pointer;
    &:focus-visible {
      box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.dark};
    }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

/**
 * this is a simple responsive button component
 * handles the disabled logic
 */
function Button({disabled, onClick, children, error}) {
  return (
    <ButtonDiv>
      {
      disabled ?
      <DisabledButtonStyles>
        {children}
      </DisabledButtonStyles> :

      <EnabledButtonStyles onClick={onClick}>
        {children}
      </EnabledButtonStyles>
      }
      {
        error &&
          <SmallText>{error}</SmallText>
      }
    </ButtonDiv>
  );
}


Button.propTypes = {
  disabled: propTypes.bool,
  /**
     * callback function to call on click event,
     * the event object is passed too :)
     */
  onClick: propTypes.func.isRequired,
  /**
   * accepts children
   */
  children: propTypes.node,
  /**
   * can also be used as additional info
   */
  error: propTypes.string,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
