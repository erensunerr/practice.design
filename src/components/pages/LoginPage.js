import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import LoginForm from '../sections/LoginForm';
import useAuthRedirect from '../useAuthRedirect';

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
  useAuthRedirect(false);
  return (
    <LoginPageStyles>
      <LoginForm />
    </LoginPageStyles>
  );
}

LoginPage.propTypes = {
};

export default LoginPage;
