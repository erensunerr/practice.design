import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {SmallText} from './Typography';

// IDEA: add disabled state
// TODO: come up with a :focus-visible state
// TODO: remove static prop and select logic, make a selectable tag

// if selected swap bg-color and color
export const TagStyles = styled.button.attrs((props) => ({
  primaryColor: props.selected && // foreground color
    props.theme.colors.light ||
    props.theme.colors.dark,
  secondaryColor: props.selected && // background color
  props.theme.colors.dark ||
  props.theme.colors.light,
}))`
  border-radius: 2rem;
  white-space: nowrap;
  align-self: center;
  padding: .25rem .5rem;
  border: 2px solid ${(props) => props.theme.colors.dark};
  color: ${
  (props) =>
    props.primaryColor
};
  background-color: ${
  (props) =>
    props.secondaryColor
};
 &:hover {
    cursor: ${(props) => (props.static ? '' : 'pointer')};
 }
`;

/**
 * Toggleable tag.
 */
function Tag(props) {
  const [selected, setSelected] = useState(props.default || true);
  let toggleSelected = () => {};
  if (!props.static) {
    toggleSelected = () => {
      setSelected((p) => (!p));
    };
  }

  // when the selected status changes, call onStatusChange prop
  useEffect(
      () => {
        props.onStatusChange && props.onStatusChange(selected);
      },
      [selected],
  );

  return (
    <TagStyles
      static={props.static}
      selected={selected}
      onClick={toggleSelected}>
      <SmallText>{props.text}</SmallText>
    </TagStyles>
  );
}

Tag.propTypes = {
  text: propTypes.string.isRequired,
  onStatusChange: propTypes.func,
  /**
   * default selection status, defaults to true (selected)
   */
  default: propTypes.bool,
  /**
   * suspends the onclick behaviour
   */
  static: propTypes.bool,
};
export default Tag;
