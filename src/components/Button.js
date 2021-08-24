import React, { useState } from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import {defaultTheme} from './styles.js';

// todo: add a label sort of thing underneath ex. in about section

const ButtonStyles = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;

    padding: 1rem 1.5rem;
    border: 1px solid ${defaultTheme.colors.dark};
    border-radius: .5rem;
    width: 100%;

    p {
        text-align: center;
        flex: 1 0;
        order: 0;
    }

    &:focus-visible {
        border-width: 2px;
        outline: none;
    }
`;



const DisabledButtonStyles = styled(ButtonStyles)`
    color: ${defaultTheme.colors.passive};
    border-color: ${defaultTheme.colors.passive};
    cursor: not-allowed;

    & img {
        opacity: 0.5;
    }
`;

const EnabledButtonStyles = styled(ButtonStyles)`
    cursor: pointer;
`
/**
 * this is a simple responsive button component
 */
function Button({ disabled, onClick, text, img}) {
    let Inner = (
        <>
            <p>{text}</p>
        </>
    );

    if (img) {
        const Img = img.src && <img src={img.src} alt={img.alt || ""}/>;
        Inner = (
            <>
                {Img} <p>{text}</p> {Img}
            </>
        );

    }

    return (
        disabled ?
            <DisabledButtonStyles>
                {Inner}
            </DisabledButtonStyles>
        :
            <EnabledButtonStyles onClick={onClick}>
                {Inner}
            </EnabledButtonStyles>
            
    )
}



Button.propTypes = {
    /**
     * use disabled to disable the button
     */
    disabled: propTypes.bool,
    /**
     * callback function to call on click event,
     * the event object is passed too :)
     */
    onClick: propTypes.func,
    /**
     * optional image to display on both sides 
     * of the text
     */
    img: propTypes.shape({
        src: propTypes.string,
        alt: propTypes.string
    }),
    /**
     * text to display inside the button
     */
    text: propTypes.string,
}

export default Button