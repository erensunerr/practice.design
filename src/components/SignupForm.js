import React, {useState} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {Title, BodyText} from './Typography';
import Option from './Option';
import TextInput from './TextInput';
import TextButton from './TextButton';
import ImageButton from './ImageButton';
import googleLogo from '../static/google_logo.svg';
import {setField} from './utils';
import doCreateAccount from '../api/doCreateAccount';
import doGoogleLogin from '../api/doGoogleLogin';

const SignupFormStyles = styled.section`
  display: flex;
  flex-flow: column;
  gap: 2rem;
`;

const Inputs = styled.section`
  display: flex;
  flex-flow: column;
  gap: .5rem;
`;


/**
 * Used to sign up lmao
 */
function SignupForm(props) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [pass, setPass] = useState('');
  const [passError, setPassError] = useState('');

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const [createAccountButtonError, setCreateAccountButtonError] = useState('');
  const [googleLoginError, setGoogleLoginButtonError] = useState('');

  const errorSetters = {
    'username': setUsernameError,
    'pass': setPassError,
    'email': setEmailError,
    'googleLogin': setGoogleLoginButtonError,
    'createAccount': setCreateAccountButtonError,
  };


  return (
    <SignupFormStyles>
      <Title>sign up</Title>
      <Inputs>
        <TextInput
          label='username'
          value={username}
          onChange={setField(setUsername)}
          error={usernameError}
        />
        <TextInput
          label='email'
          value={email}
          onChange={setField(setEmail)}
          error={emailError}
        />
        <TextInput
          label='pass'
          type='password'
          value={pass}
          onChange={setField(setPass)}
          error={passError}
        />
      </Inputs>
      <TextButton
        text="create account"
        onClick={() => doCreateAccount(username, email, pass, errorSetters)}
        error={createAccountButtonError}
      />

      <ImageButton
        text="login with google"
        img={{src: googleLogo}}
        onClick={() => doGoogleLogin(errorSetters)}
        error={googleLoginError}
      />

    </SignupFormStyles>
  );
}


SignupForm.propTypes = {
};

export default SignupForm;
