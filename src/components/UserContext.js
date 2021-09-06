import React, {useState, useEffect} from 'react';
import {getAuth, onAuthStateChanged, sendEmailVerification}
  from 'firebase/auth';
import {doc, onSnapshot, getFirestore} from 'firebase/firestore';
import propTypes from 'prop-types';

import Toast from './atoms/Toast';
import UsernameModal from './sections/UsernameModal';
import User, {getUserByUid, updateUserData} from '../api/user';

const UserContext = React.createContext();


const afterAuth = async (nUser, setToDisplay) => {
  // if user's email is not verified send toast
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
};

const afterFirestoreAuth = async (user, setToDisplay) => {
  // if the user doesn't have a username, display modal,
  if (user && user.username == null || user.username == '') {
    setToDisplay(
        <UsernameModal removeMe={() => setToDisplay(null)}/>,
    );
  }
};

/**
 * provides the user context and adapts to changes
 */
function UserContextProvider(props) {
  const [user, setUser] = useState(null);
  const [uid, setUid] = useState(null);
  const [isWaiting, setIsWaiting] = useState(true);
  const [toDisplay, setToDisplay] = useState(null);

  const auth = getAuth();

  useEffect(
      // update uid on auth change
      () => {
        setIsWaiting(true);
        onAuthStateChanged(
            auth,
            (nUser) => {
              if (nUser) {
                setUid(nUser.uid);
                afterAuth(nUser, setToDisplay);
              }
            },
        );
      },
      [auth],
  );

  useEffect(
      () => { // update user on uid change
        if (uid) {
          console.log('subscribed to snapshot for user, ', uid);
          const db = getFirestore();
          const unsub = onSnapshot(
              doc(db, 'users', uid),
              (d) => {
                console.log(d);
                let newUser = new User({uid, ...user});
                newUser = {...newUser, ...d.data()};
                setUser(newUser);
                setIsWaiting(false);
                afterFirestoreAuth(newUser, setToDisplay);
              },
          );
          return unsub;
        }
      },
      [uid],
  );

  const value = {
    user: user,
    isWaiting: isWaiting,
  };

  console.log('user context: ', value);

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
