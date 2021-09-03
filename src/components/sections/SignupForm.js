import React, {useState} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Typography from '../atoms/Typography';
import Option from '../atoms/Option';
import TextInput from '../atoms/TextInput';
import TextButton from '../atoms/Button/TextButton';
import ImageButton from '../atoms/Button/ImageButton';
import googleLogo from '../../static/google_logo.svg';
import {setField} from '../utils';
import doCreateAccount from '../../api/doCreateAccount';
import doGoogleLogin from '../../api/doGoogleLogin';
import {useHistory} from 'react-router-dom';
import Toast from '../atoms/Toast';

const SignupFormStyles = styled.section`
  display: flex;
  flex-flow: column;
  gap: 2rem;
  align-items: flex-start;
  width: 100%;
  gap: 2rem;
`;

const Inputs = styled.section`
  display: flex;
  flex-flow: column;
  gap: .5rem;
  width: 100%;
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

  const [toast, setToast] = useState('');

  const errorSetters = {
    'username': setUsernameError,
    'pass': setPassError,
    'email': setEmailError,
    'googleLogin': setGoogleLoginButtonError,
    'createAccount': setCreateAccountButtonError,
    'toast': setToast,
  };

  const history = useHistory();

  return (
    <SignupFormStyles>
      <Typography.Title>sign up</Typography.Title>
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
      <Option
        text='I already have an account'
        onClick={() => history.push('/login')}
      />
      {
        toast &&
        <Toast text={toast} />
      }
    </SignupFormStyles>
  );
}


SignupForm.propTypes = {
};

export default SignupForm;
