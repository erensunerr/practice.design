import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {defaultTheme} from '../styles'


// todo: rename this into an option component, a similar thing is being used in login form
// and cards
const NavbarOptionStyles = styled.button`

    color: ${defaultTheme.dark};
    text-decoration: underline;
    padding: .75rem;
    &:hover {
        cursor: pointer;
    }
`;

function NavbarOption({onClick, text}) {
    return (
        <NavbarOptionStyles onClick={onClick}>{text}</NavbarOptionStyles>
    )
}

NavbarOption.propTypes = {
    /**
     * onclick callback
     */
    onClick: propTypes.func,
    /**
     * label
     */
    text: propTypes.string
}

export default NavbarOption