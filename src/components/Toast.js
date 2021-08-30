import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {defaultTheme} from './styles';
import {BodyText} from './Typography';

const ToastStyles = styled(BodyText)`
    position: fixed;
    bottom: 4rem;
    left: 50vw;
    transform: translateX(-50%);
    padding: .5rem 1rem;
    background-color: ${ defaultTheme.colors.dark };
    color: ${ defaultTheme.colors.light };
    border-radius: 2rem;
    transition: transform .3s;
`;


/**
 * generic toast message displayed mid bottom.
 * all other props passed to the html element
 */
function Toast(props) {
  // remove callback
  const {
    onRemove,
    text,
    visibleDuration,
    ...otherProps} = props;

  const [gone, setGone] = useState(false);
  const [timerId, setTimerId] = useState();

  const removeToast = () => {
    try {
      onRemove(otherProps?.id);
    } catch {}
    setGone(true);
  };


  // remove toast in visibleDuration seconds
  useEffect(
      () => {
        const timeoutID = setTimeout(
            removeToast,
            (visibleDuration)*1000,
        );
        setTimerId(timeoutID);
      },
      [],
  );

  // if toast is already removed, remove the timer
  useEffect(
      () => {
        gone && clearTimeout(timerId);
      },
      [gone],
  );


  return (
        gone ? null :
        <ToastStyles onClick={removeToast} {...otherProps} >
          {text}
        </ToastStyles>
  );
}

Toast.propTypes = {
  text: propTypes.string.isRequired,
  /**
     * callback function
     * called on remove
     * if you passed an id prop it will be returned as an argument
     */
  onRemove: propTypes.func,
  /**
     * duration in seconds
     */
  visibleDuration: propTypes.number,
};

Toast.defaultProps = {
  visibleDuration: 3,
};


export default Toast;
