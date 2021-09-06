import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Modal from '../organisms/Modal';
import Info from '../atoms/Info';
import TextInput from '../atoms/TextInput';
import {setField} from '../utils';
import TextButton from '../atoms/Button/TextButton';
import Toast from '../atoms/Toast';
import {updateUserData} from '../../api/user';
import useUser from '../useUser';
import User from '../../api/user';

const UsernameModal = ({removeMe}) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');
  const {user} = useUser();

  const errorSetters = {
    'info': setToast,
    'username': setError,
  };
  useEffect(
      () => {
        // doCheckUsername(username, errorSetters);
      },
      [username, setError],
  );


  // passed to updateUserData


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
        disabled={error ? true : false}
        error={error}
        onClick={
          () => {
            const newUser = new User(user);
            newUser.username = username;
            updateUserData(
                newUser,
            );
            removeMe();
          }
        }
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

export default UsernameModal;
