import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Typography from '../atoms/Typography';
import Card from '../atoms/Card';

/**
 * expanding card grid
 */
function CardGrid({children, ...oP}) {
  console.log('card grid with', children);
  return (
    <section {...oP}>
      <>
        {
          children
        }
      </>
    </section>
  );
}

// TODO: write propTypes for CardGrid
CardGrid.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};

CardGrid = styled(CardGrid)`
  display: flex;
  flex-flow: wrap;
  ${Card} {
    flex: 1 0 250px;
  }
  gap: 2rem;
`;

export default CardGrid;
