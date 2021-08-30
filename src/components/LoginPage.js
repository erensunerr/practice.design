import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {BodyText} from './Typography';
import LoginForm from './LoginForm';

const LoginPageStyles = styled.section`
  width: 33.3333%;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    & {
      width: 100%;
    }
  }
`;

/**
 * let them log in lolz
 */
function LoginPage(props) {
  return (
    <LoginPageStyles>
      <LoginForm />
    </LoginPageStyles>
  );
}

// TODO: write propTypes for LoginPage
LoginPage.propTypes = {
};

export default LoginPage;
