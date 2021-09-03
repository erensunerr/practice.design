import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Typography from './Typography';


const IconStyles = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  &, img {
    background-color: transparent;
  }
`;


/**
 * an icon
 */
function Icon({src, alt, onClick, ...oP}) {
  return (
    <IconStyles
      onClick={onClick}
      {...oP}
    >
      <img
        src={src}
        alt={alt || 'some icon'}/>
    </IconStyles>
  );
}

// TODO: write propTypes for Icon
Icon.propTypes = {
  src: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  alt: propTypes.string.isRequired,
};

export default Icon;
