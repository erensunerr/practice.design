import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const ModalStyles = styled.section`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${(props) => props.theme.colors.dark};
  border-radius: .25rem;
  display: flex;
  flex-flow: column;
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 384px;
  min-width: 240px;
  background-color: ${(props) => props.theme.colors.light};
  width: 50%;
`;

/**
 * top level overlay.
 */
function Modal(props) {
  return (
    <ModalStyles>
      {props.children}
    </ModalStyles>
  );
}

Modal.propTypes = {
  children: propTypes.node,
};

export default Modal;
