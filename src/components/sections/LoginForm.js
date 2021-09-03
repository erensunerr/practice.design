import React, {useState} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import googleLogo from '../../static/google_logo.svg';
import Typography from '../atoms/Typography';
import Option from '../atoms/Option';
import ImageButton from '../atoms/Button/ImageButton';
import TextButton from '../atoms/Button/TextButton';
import TextInput from '../atoms/TextInput';
import useOptionReveal from '../useOptionReveal';
import {setField} from '../utils';
import doLogin from '../../api/doLogin';
import doGoogleLogin from '../../api/doGoogleLogin';
import doResetPassword from '../../api/doResetPassword';
import Toast from '../atoms/Toast';

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
      <Typography.Title>login</Typography.Title>

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
