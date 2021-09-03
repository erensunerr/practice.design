import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Typography from '../atoms/Typography';
import useAuthRedirect from '../useAuthRedirect';
import {UserContext} from '../UserContext';
import TextButton from '../atoms/Button/TextButton';
import Option from '../atoms/Option';
import TextInput from '../atoms/TextInput';
import {setField} from '../utils';
import doCheckUsername from '../../api/doCheckUsername';
import doUpdateUsername from '../../api/doUpdateUsername';
import doSetPassword from '../../api/doUpdatePassword';
import Toast from '../atoms/Toast';

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

  // passed to the api functions
  const errorSetters = {
    'username': setError,
    'info': setToast,
  };

  // check username every time it changes, animate based on that :)
  // maybe change username to some other state that you can use to animate
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
          <Typography.BodyText>
            username: @{user.displayName}
          </Typography.BodyText>
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
  ${Typography.Title} {
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

  if (!isWaiting && user) {
    return (
      <SettingsPageStyles>
        <Typography.Title>settings</Typography.Title>
        <FormStyles>
          <Typography.Subtitle>account stuffz</Typography.Subtitle>
          <UsernameSection user={user} />
        </FormStyles>
        <FormStyles>
          <Typography.Subtitle>{`for "social" people`}</Typography.Subtitle>
          <Typography.BodyText>socials section</Typography.BodyText>
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
