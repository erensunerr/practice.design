import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Typography from './Typography';
import getGrid from '../utils/getGrid';

export const InfoStyles = styled(getGrid(5, true))`
`;

/**
 * Used to provide titled information
 */
function Info({title, text, children, ...oP}) {
  return (
    <InfoStyles {...oP}>
      <Typography.Subtitle>
        {title}
      </Typography.Subtitle>
      <Typography.BodyText>
        {text || children}
      </Typography.BodyText>
    </InfoStyles>
  );
}

Info.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.string,
  /**
   * children can be used instead of text
   * if you want links etc.
   */
  children: propTypes.array,
};

export default Info;
