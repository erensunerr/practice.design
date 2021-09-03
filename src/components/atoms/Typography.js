import React from 'react';
import styled, {css} from 'styled-components';
import propTypes from 'prop-types';

/**
 * this file includes some typographic styles
 * like title, subtitle etc.
 */


// TODO: add skeleton versions for nice loading

const Title = styled.h1`
  font-size: 64px;
  line-height: 80px;

`;

const Subtitle = styled.h3`
  font-size: 24px;
  line-height: 40px;
  font-weight: bold;
`;

const BodyText = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

const SmallText = styled.p`
  font-size: 8px;
  line-height: 12px;
`;

const Bold = styled.span`
  font-weight: 800;
`;

export default {
  Title,
  Subtitle,
  BodyText,
  SmallText,
  Bold,
};

