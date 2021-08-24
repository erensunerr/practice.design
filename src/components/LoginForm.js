import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { defaultTheme } from './styles'
import Button from './Button'
import google_logo from '../static/google_logo.svg';


// todo remove some complexity from this component into others

const LoginFormStyles = styled.div`
    display: flex;
    flex-flow: column;
    gap: 2rem;
`

const InputsStyles = styled.div`
    display: flex;
    flex-flow: column;
    gap: 1rem;
    
`

const Options = styled.div`
    display: flex;
    justify-content: space-between;
    button {
        border: none;
        padding: .5rem;
        background: transparent;
        cursor: pointer;
        &:focus-visible {
            outline: none;
            font-weight: bold;
        }
    }
`

const InputStyles = styled.input`

    border-radius: 0;
    padding: .5rem;
    border: 1px solid ${ defaultTheme.colors.dark };

    &:focus-visible {
        border-width: 2px;
        outline: none;
    }
`

const ErrorStyles = styled.p`

`

const ErrorDict = {
    'errorname': [ "possible message 1", "possible message 2" ],
}

/**
 * 
 */
function LoginForm(props) {

    // forgot password stuff
    const [ forgotPassword, setForgotPassword ] = useState(false);
    const toggleForgotPassword = () => setForgotPassword(p => !p);
    const [ forgotPasswordEmail, setForgotPasswordEmail ] = useState(false);
    const [ forgotPasswordError, setForgotPasswordError ] = useState(null);


    // regular form stuff
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState(null);


    // do firebase stuff
    function doLogin() {
        console.log("DO LOGIN WITH: ", email, password);
    }
    function doResetPassword() {
        console.log("DO RESET PASSWORD WITH: ", forgotPasswordEmail);
    }
    function doGoogleLogin() {
        console.log("DO GOOGLE LOGIN");
    }





    function setField(setter) {
        return function (e) {
            setter(e.target.value)
        }
    }

    return (
        <LoginFormStyles>
            <h1>login</h1>

            <InputsStyles>
                <InputStyles 
                    onChange={ setField(setEmail) } 
                    value={ email }
                    placeholder="email" />
                <InputStyles 
                    onChange={ setField(setPassword) }
                    value={ password }
                    type="password"
                    placeholder="password" />

                {   
                    error &&
                    <ErrorStyles className="small-text">
                        { ErrorDict[error] }
                    </ErrorStyles>
                }
            </InputsStyles>

            <Button 
                text="login" 
                onClick={() => doLogin()} />

            <Button 
                text="login with google"
                img={{src: google_logo}}
                onClick={ () => doGoogleLogin() } />


            <Options>
                <button className="underline">sign up instead</button>
                <button 
                    className="underline" 
                    onClick={ toggleForgotPassword }>
                    forgot password
                </button>
            </Options>

            {   forgotPassword &&
                <>
                    <InputStyles placeholder="email" onChange={ setField(setForgotPasswordEmail) }/>
                    {   
                        forgotPasswordError &&
                        <ErrorStyles className="small-text">
                            {ErrorDict[error] }
                        </ErrorStyles>
                    }
                    <Button text="reset password" onClick={ () => doResetPassword(forgotPasswordEmail) } />
                </>
            }
            
        </LoginFormStyles>
    )
}

// todo: write propTypes for LoginForm
LoginForm.propTypes = {

}

export default LoginForm