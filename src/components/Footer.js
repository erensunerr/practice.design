import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from './styles';

const FooterStyles = styled.section`

    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 1rem;
    padding: 5rem 0;
    align-items: center;

    background-color: ${defaultTheme.colors.dark};
    color: ${defaultTheme.colors.light};
    a {
        color: ${defaultTheme.colors.light};
        transition: transform 300ms ease-in;
    }
    a:hover, a:active {
        display: inline-block;
        color: red;
    }
`

/**
 * accepts no props whatsoever.
 */
function Footer() {
    return (
        <FooterStyles>
            <p>practice.design</p>
            <p>made with ❤️ by <a href="http://github.com/gerroo">@gerroo</a></p>
        </FooterStyles>
    );
}

export default Footer;