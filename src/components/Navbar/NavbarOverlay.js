import React, {useState} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {defaultTheme} from '../styles'
import NavbarOption from './NavbarOption'


const NavbarOverlayStyles = styled.nav`
    position: absolute;
    padding: 2.5rem .5rem;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    gap: .5rem;
    top: 4rem;
`;

function NavbarOverlay({options}) {
    return (
        <NavbarOverlayStyles>
            {options.map((option, i) => <NavbarOption key={i} {...option}/>)}
        </NavbarOverlayStyles>
    );
}


NavbarOverlay.propTypes = {
    /**
     * array of option objects 
     * {onClick, text}
     */
    options: propTypes.array,
};

export default NavbarOverlay;