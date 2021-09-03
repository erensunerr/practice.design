import styled, {css} from 'styled-components';

/**
 * returns focus pseudo element
 */
function focusVisible(isText) {
  if (isText) {
    return css`
      &:focus-visible {
        cursor: pointer;
        text-decoration-thickness: 2px;
        outline: none;
      }
  `;
  } else {
    return css`
      &:focus-visible {
        cursor: pointer;
        box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.dark};
        outline: none;
      }
    `;
  }
}

export default focusVisible;
