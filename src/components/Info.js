import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {defaultTheme} from './styles';
import {BodyText, Subtitle} from './Typography';

export const InfoStyles = styled.div`
    display: flex;
    flex-flow: column;
    gap: 8px;
`;

/**
 * Used to provide titled information
 */
function Info(props) {
  return (
    <InfoStyles>
      <Subtitle>
        {props.title}
      </Subtitle>
      <BodyText>
        {props.text || props.children}
      </BodyText>
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
