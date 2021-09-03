import React, {useState} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Typography from '../Typography';
import getGrid from '../../utils/getGrid';
import focusVisible from '../../utils/focusVisible';

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
    border-radius: .5rem;
    width: 100%;

    border: 1px solid ${(props) => props.theme.colors.dark};
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
    ${
  focusVisible(false) // isText = false;
}
`;

const ButtonDiv = styled(getGrid(5, true))`
`;

/**
 * this is a simple responsive button component
 * handles the disabled logic
 */
function Button({disabled, onClick, children, error, ...oP}) {
  return (
    <ButtonDiv {...oP}>
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
          <Typography.SmallText>{error}</Typography.SmallText>
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
