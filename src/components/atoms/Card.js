import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import getGrid from '../utils/getGrid';

export const CardStyles = styled(getGrid(4))`
  align-items: flex-start;
  & > * {
    width: 100%;
  }
`;

/**
 * Generic card. All other props are spread to the div element.
 */
function Card(props) {
  return (
    <CardStyles {...props}/>
  );
}

Card.propTypes = {
  children: propTypes.node.isRequired,
};

export default Card;
