import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Typography from '../atoms/Typography';
import TextInput from '../atoms/TextInput';
import TextButton from '../atoms/Button/TextButton';
import {setField} from '../utils';
import getGrid from '../utils/getGrid';
import useUser from '../useUser';
import Challenge from '../../api/challenge';
import {useHistory} from 'react-router-dom';
import Toast from '../atoms/Toast';
import doCreateChallenge from '../../api/doCreateChallenge';

/**
 * submit form for challenge and solutions
 */
function CreateChallengeForm({...oP}) {
  const [figmaUrl, setFigmaUrl] = useState('');
  const [title, setTitle] = useState('');
  const [toast, setToast] = useState('');
  const {user} = useUser();
  const history = useHistory();
  return (
    <div {...oP}>
      <TextInput
        label='title'
        onChange={setField(setTitle)}
        value={title}
      />
      <TextInput
        label='figma community url'
        onChange={setField(setFigmaUrl)}
        value={figmaUrl}
      />
      <TextButton
        disabled={toast != ''}
        text='create'
        onClick={async () => {
          const newChallenge = new Challenge(
              {
                title,
                figmaUrl,
              },
          );
          doCreateChallenge(newChallenge, user);
          setToast('😸 you just created a challenge');
        }}
      />
      {
        toast &&
        <Toast
          text={toast}
        />
      }
    </div>
  );
}

// TODO: write propTypes for SubmitForm
CreateChallengeForm.propTypes = {
  onSubmit: propTypes.func,
  error: propTypes.string,
};

const StyledCreateChallengeForm = styled(CreateChallengeForm)`
  gap: 1rem;
  display: flex;
  flex-flow: column;
`;

export default StyledCreateChallengeForm;
