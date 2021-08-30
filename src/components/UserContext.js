import React, {useState, useEffect} from 'react';
import {getAuth, onAuthStateChanged, sendEmailVerification}
  from 'firebase/auth';
import propTypes from 'prop-types';
import Toast from './Toast';
import Modal from './Modal';
import Info from './Info';
import TextInput from './TextInput';
import {setField} from './utils';
import TextButton from './TextButton';
import doCheckUsername from '../api/doCheckUsername';
import doSetUsername from '../api/doSetUsername';


const UserContext = React.createContext();

const UsernameModal = ({removeMe}) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  useEffect(
      () => {
        doCheckUsername(username, setError);
      },
      [username, setError],
  );

  return (
    <Modal>
      <Info
        title='now pick a username'
        text='You can always change it later in settings.'
      />
      <TextInput
        value={username}
        onChange={setField(setUsername)}
        label={'username'}
      />
      <TextButton
        text={`call me ${username}`}
        disabled={error}
        error={error}
        onClick={() => doSetUsername(username, setError) && removeMe()}
      />
    </Modal>
  );
};
UsernameModal.propTypes = {
  removeMe: propTypes.func,
};

/**
 * provides the user context and adapts to changes
 */
function UserContextProvider(props) {
  const [user, setUser] = useState(null);
  const [toDisplay, setToDisplay] = useState(null);
  const auth = getAuth();

  useEffect(
      () => onAuthStateChanged(
          auth,
          (nUser) => {
            setUser(nUser);
            if (nUser && !nUser.emailVerified) {
              sendEmailVerification(nUser).then(
                  () => {
                    setToDisplay(
                        <Toast
                          text='email verification sent'
                        />,
                    );
                  },
              );
            }

            if (nUser && nUser.emailVerified && !nUser.displayName) {
              setToDisplay(
                  <UsernameModal removeMe={() => setToDisplay(null)}/>,
              );
            }
          },
      ),
      [auth],
  );

  return (
    <UserContext.Provider value={user}>
      {toDisplay}
      {props.children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: propTypes.node,
};

export {UserContext, UserContextProvider};
