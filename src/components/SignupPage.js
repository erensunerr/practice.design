import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {BodyText} from './Typography';
import SignupForm from './SignupForm';


const SignupPageStyles = styled.section`
  width: 33.3333%;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    & {
      width: 100%;
    }
  }
`;
/**
 * let them register
 */
function SignupPage(props) {
  return (
    <SignupPageStyles>
      <SignupForm />
    </SignupPageStyles>
  );
}

// TODO: write propTypes for SignupPage
SignupPage.propTypes = {
};

export default SignupPage;
