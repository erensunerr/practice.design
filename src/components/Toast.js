import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { defaultTheme } from './styles';



const VISIBLE_DURATION = 3; // seconds

const ToastStyles = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 50vw;
    transform: translateX(-50%);
    padding: .5rem 1rem;
    background-color: ${ defaultTheme.colors.dark };
    color: ${ defaultTheme.colors.light };
    border-radius: 2rem;
    transition: transform .3s;
`



/**
 * generic toast message displayed mid bottom.
 * all other props passed to the div
 */
function Toast(props) {

    // remove callback
    const { removeMe, text, visibleDuration=VISIBLE_DURATION, ...otherProps }  = props;
    const [ gone, setGone ] = useState( false );
    const removeToast = () => {
        console.log("[+] toast removed")
        try {
            removeMe();
        } catch {}
        setGone( true );
    }


    // animation effect
    useEffect( 
        () => {
            console.log("called effect");
            setTimeout(
                removeToast,
                (visibleDuration)*1000
            )
        },
        []
    );


    return (
        gone ? null 
        : <ToastStyles onClick={removeToast} {...otherProps} >
            {text}
        </ToastStyles>
    );
}

// todo: write propTypes for Toast
Toast.propTypes = {
    text: propTypes.string.isRequired,
    /**
     * callback function
     * that removes toast
     */
    removeMe: propTypes.func,
    /**
     * duration in seconds
     */
    visibleDuration: propTypes.number
}

export default Toast