import React from 'react';
import styled from 'styled-components';

import Typography from '../atoms/Typography';

const FooterStyles = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  padding: 5rem 0;
  align-items: center;

  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.light};
`;

const GerrooStyles = styled.a`
  color: ${(props) => props.theme.colors.light};
  transition: color 150ms ease-in;

  &:hover, &:active {
      color: red;
  }
`;

/**
 * accepts no props whatsoever.
 * cool component that mentions me lolz
 */
function Footer({...oP}) {
  return (
    <FooterStyles {...oP}>
      <Typography.BodyText>practice.design</Typography.BodyText>
      <Typography.BodyText>made with ❤️ by <GerrooStyles href="http://github.com/gerroo">@gerroo</GerrooStyles></Typography.BodyText>
    </FooterStyles>
  );
}

export default Footer;
