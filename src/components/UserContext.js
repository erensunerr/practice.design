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
import doUpdateUsername from '../api/doUpdateUsername';


const UserContext = React.createContext();

const UsernameModal = ({removeMe}) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');

  const errorSetters = {
    'info': setToast,
    'username': setError,
  };
  useEffect(
      () => {
        doCheckUsername(username, errorSetters);
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
        onClick={() => doUpdateUsername(username, errorSetters) && removeMe()}
      />
      {
        toast &&
        <Toast text={toast} />
      }
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
  const [isWaiting, setIsWaiting] = useState(true);
  const [toDisplay, setToDisplay] = useState(null);

  const auth = getAuth();

  const afterAuth = () => {
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
  };

  useEffect(
      () => {
        setIsWaiting(true);
        onAuthStateChanged(
            auth,
            (nUser) => {
              setUser(nUser);
              setIsWaiting(false);
            },
        );
      },
      [auth],
  );
  const value = {
    user: user,
    isWaiting: isWaiting,
  };

  return (
    <UserContext.Provider value={value}>
      {toDisplay}
      {props.children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: propTypes.node,
};

export {UserContext, UserContextProvider};
