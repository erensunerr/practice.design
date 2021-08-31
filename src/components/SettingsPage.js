import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {Title, Subtitle, BodyText} from './Typography';
import useAuthRedirect from './useAuthRedirect';
import {UserContext} from './UserContext';
import TextButton from './TextButton';
import Option from './Option';
import useOptionReveal from './useOptionReveal';
import TextInput from './TextInput';
import {setField} from './utils';
import doCheckUsername from '../api/doCheckUsername';
import doUpdateUsername from '../api/doUpdateUsername';
import doSetPassword from '../api/doUpdatePassword';
import Toast from './Toast';

// TODO: extract username and email section into the same thing

const UsernameSectionStyles = styled.div`
  display: flex;
  gap: .5rem;
  flex-flow: wrap;
  justify-content: space-between;
`;
const ActiveUsernameSectionStyles = styled(UsernameSectionStyles)`
  & > * {
    width: 100%;
  }
`;

const PassiveUsernameSectionStyles = styled(UsernameSectionStyles)``;

const UsernameSection = ({user}) => {
  const [username, setUsername] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');

  const errorSetters = {
    'username': setError,
    'info': setToast,
  };

  useEffect(
      () => doCheckUsername(username, errorSetters),
      [username],
  );

  const Styles =
    isEditing ?
      ActiveUsernameSectionStyles :
      PassiveUsernameSectionStyles
  ;


  return (
    <>
      <Styles>
        {
        isEditing ?
          <>
            <TextInput
              label='username'
              value={username}
              onChange={setField(setUsername)}
              error={error}
            />

            <TextButton
              text={username ? `call me ${username}` : 'change username'}
              onClick={
                () => {
                  doUpdateUsername(username, errorSetters);
                  setIsEditing(false);
                }
              }
            />
          </> :

        <>
          <BodyText>username: @{user.displayName}</BodyText>
          <Option text='change' onClick={() => setIsEditing(true)} />
        </>
        }

      </Styles>
      {
        toast &&
      <Toast text={toast}/>
      }
    </>
  );
};

UsernameSection.propTypes = {
  user: propTypes.object,
};


// PASSWORD SECTION

const PasswordSectionStyles = styled.div`
  display: flex;
  gap: .5rem;
  flex-flow: wrap;
  justify-content: space-between;
`;
const ActivePasswordSectionStyles = styled(PasswordSectionStyles)`
  & > * {
    width: 100%;
  }
`;

const PassivePasswordSectionStyles = styled(PasswordSectionStyles)``;

const PasswordSection = ({user}) => {
  const [pass, setPass] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');

  const errorSetters = {
    'pass': setError,
    'info': setToast,
  };

  const Styles =
    isEditing ?
      ActivePasswordSectionStyles :
      PassivePasswordSectionStyles
  ;


  return (
    <>
      <Styles>
        {
        isEditing ?
          <>
            <TextInput
              label='password'
              value={pass}
              onChange={setField(setPass)}
              error={error}
              type='password'
            />

            <TextButton
              text='change your password'
              onClick={
                () => {
                  doSetPassword(pass, errorSetters);
                  setIsEditing(false);
                }
              }
            />
          </> :

        <>
          <Option
            text='change your password'
            onClick={() => setIsEditing(true)}
          />
        </>
        }

      </Styles>
      {
        toast &&
      <Toast text={toast}/>
      }
    </>
  );
};

PasswordSection.propTypes = {
  user: propTypes.object,
};

/**
 * da da yada duba doo
 */
function SocialsSection() {
  // TODO: code this
}

const SettingsPageStyles = styled.section`
  display: flex;
  flex-flow: wrap;
  gap: 8rem;
  justify-content: space-between;
  ${Title} {
    width: 100%;
  }

`;

const FormStyles = styled.section`
  display: flex;
  flex-flow: column;
  gap: 2rem;
  flex: 1 0 250px;
`;

/**
 * settings page lolz
 */
function SettingsPage(props) {
  useAuthRedirect(true);
  const {user, isWaiting} = useContext(UserContext);
  console.log(user);
  if (!isWaiting && user) {
    return (
      <SettingsPageStyles>
        <Title>settings</Title>
        <FormStyles>
          <Subtitle>account stuffz</Subtitle>
          <UsernameSection user={user} />
          {
            user.providerData[0].providerId === 'password' &&
            <PasswordSection user={user} />
          }
        </FormStyles>
        <FormStyles>
          <Subtitle>{`for "social" people`}</Subtitle>
          <BodyText>socials section</BodyText>
        </FormStyles>
      </SettingsPageStyles>
    );
  } else { // waiting for the user
    return (null);
  }
}

// TODO: write propTypes for SettingsPage
SettingsPage.propTypes = {
};

export default SettingsPage;
