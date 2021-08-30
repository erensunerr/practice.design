import React, {useState} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Button from './Button';
import googleLogo from '../static/google_logo.svg';
import {Title} from './Typography';
import Option from './Option';
import ImageButton from './ImageButton';
import TextButton from './TextButton';
import TextInput from './TextInput';
import useOptionReveal from './useOptionReveal';
import {setField} from './utils';
import doLogin from '../api/doLogin';
import doGoogleLogin from '../api/doGoogleLogin';
import doResetPassword from '../api/doResetPassword';
import useAuthRedirect from './useAuthRedirect';
import {useHistory} from 'react-router-dom';
import Toast from './Toast';

const LoginFormStyles = styled.section`
    display: flex;
    flex-flow: column;
    gap: 2rem;
`;

const InputsStyles = styled.div`
    display: flex;
    flex-flow: column;
    gap: .5rem;
`;

const Options = styled.div`
    display: flex;
    justify-content: space-between;
`;

/**
 * Let them log in or eat bread?
 * - Nah log in.
 */
function LoginForm(props) {
  useAuthRedirect(false);
  const history = useHistory();

  // regular form stuff
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passError, setPassError] = useState(null);
  const [loginButtonError, setLoginButtonError] = useState(null);
  const [googleLoginButtonError, setGoogleLoginButtonError] = useState(null);
  const [toast, setToast] = useState('');

  // forgot password stuff
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [forgotPasswordError, setForgotPasswordError] = useState('');


  // error setter object passed to firebase.
  const errorSetters = {
    'email': setEmailError,
    'pass': setPassError,
    'login': setLoginButtonError,
    'googleLogin': setGoogleLoginButtonError,
    'forgotPassword': setForgotPasswordError,
    'toast': setToast,
  };

  const [forgotPasswordOption, forgotPasswordSection] = useOptionReveal(
      'forgot password',
      <>
        <TextInput
          value={forgotPasswordEmail}
          onChange={setField(setForgotPasswordEmail)}
          label='email'
          error={forgotPasswordError}
        />
        <TextButton
          text="reset password"
          onClick={() => doResetPassword(forgotPasswordEmail, errorSetters)}
        />
      </>,
  );
  return (
    <LoginFormStyles>
      <Title>login</Title>

      <InputsStyles>
        <TextInput
          label='email'
          onChange={setField(setEmail)}
          value={email}
          error={emailError}
        />
        <TextInput
          label='password'
          type='password'
          onChange={setField(setPass)}
          value={pass}
          error={passError}
        />
      </InputsStyles>
      <TextButton
        text="login"
        onClick={() => doLogin(email, pass, errorSetters)}
        error={loginButtonError}
      />


      <ImageButton
        text="login with google"
        img={{src: googleLogo}}
        onClick={() => doGoogleLogin(errorSetters)}
        error={googleLoginButtonError}
      />
      <Options>
        <Option
          text='sign up instead'
          onClick={() => history.push('/signup')}
        />
        {
          forgotPasswordOption
        }
      </Options>

      {
        forgotPasswordSection
      }

      {
        toast &&
        <Toast text={toast} />
      }

    </LoginFormStyles>
  );
}

LoginForm.propTypes = {

};

export default LoginForm;
