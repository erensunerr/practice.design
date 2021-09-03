import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Typography from './Typography';

const ToastStyles = styled(Typography.BodyText)`
    position: fixed;
    bottom: 4rem;
    left: 50vw;
    transform: translateX(-50%);
    padding: .5rem 1rem;
    background-color: ${ (props) => props.theme.colors.dark };
    color: ${ (props) => props.theme.colors.light };
    border-radius: 2rem;
`;

/**
 * generic toast message displayed mid bottom.
 * all other props passed to the html element
 * pass id prop to receive it in the onRemove callback
 */
function Toast({onRemove, text, visibleDuration, id, ...otherProps}) {
  const [gone, setGone] = useState(false);
  const [timerId, setTimerId] = useState();

  const removeToast = () => {
    onRemove && onRemove(id);
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
        return () => {
          clearTimeout(timeoutID);
        };
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
  /**
   * you can use children too
   */
  text: propTypes.string,
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
  /**
   * passed to onRemove
   */
  id: propTypes.oneOfType([
    propTypes.object,
    propTypes.number,
    propTypes.string,
  ]),
};

Toast.defaultProps = {
  visibleDuration: 3,
};


export default Toast;
