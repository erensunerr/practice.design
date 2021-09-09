import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import getGrid from '../utils/getGrid';

const Grid = getGrid(4);

/**
 * Generic card. All other props are spread to the div element.
 */
function Card(props) {
  return (
    <Grid {...props}/>
  );
}

Card.propTypes = {
  children: propTypes.node.isRequired,
};

export default styled(Card)`
  align-items: flex-start;
  min-width: 200px;
  max-width: 400px;
  & > * {
    width: 100%;
  }
`;
