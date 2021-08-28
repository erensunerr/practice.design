import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {InfoStyles} from './Info';


export const CardStyles = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  overflow: hidden;
  align-items: flex-start;
  ${InfoStyles} {
    gap: 0;
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
