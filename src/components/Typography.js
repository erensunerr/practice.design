import React from 'react';
import styled, {css} from 'styled-components';
import propTypes from 'prop-types';
import {defaultTheme} from './styles';

/**
 * this file includes some typographic styles
 * like title, subtitle etc.
 */

/**
 * Some simplifying functions used in styling.
 */
const skeletonizer = (props) => props.skeleton && css`
  background-color: ${(props) => props.theme.colors.passive};
`;

// TODO: add skeleton versions for nice loading

export const Title = styled.h1`
  font-size: 64px;
  line-height: 80px;

`;

export const Subtitle = styled.h3`
  font-size: 24px;
  line-height: 40px;
  font-weight: bold;
`;

export const BodyText = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

export const SmallText = styled.p`
  font-size: 8px;
  line-height: 12px;
`;

/**
 * a demo component for typographic styles,
 * only used in the associated story
 */
export default function TypographyDemo() {
  return (
    <div>
      <Title>{`I'm a title`}</Title>
      <Title skeleton></Title>
      <Subtitle>{`I'm a subtitle`}</Subtitle>
      <BodyText>
        {`I'm some body text. 
          John Green is a great guy who has a big mustache.`}
      </BodyText>
      <SmallText>
        {`I'm some small text. 
          John Green is a great guy who has a big mustache.`}
      </SmallText>
    </div>
  );
}
