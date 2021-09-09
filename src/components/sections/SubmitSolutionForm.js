import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Typography from '../atoms/Typography';
import TextInput from '../atoms/TextInput';
import TextButton from '../atoms/Button/TextButton';
import {setField} from '../utils';
import getGrid from '../utils/getGrid';
import Solution, {updateSolutionData} from '../../api/solution';
import useUser from '../useUser';
import {useParams} from 'react-router-dom';
import Challenge from '../../api/challenge';
import User, {updateUserData} from '../../api/user';
import Toast from '../atoms/Toast';
import doCreateSolution from '../../api/doCreateSolution';

/**
 * submit form for challenge and solutions
 */
function SubmitSolutionForm({challenge, ...oP}) {
  const [figmaUrl, setFigmaUrl] = useState('');
  const [toast, setToast] = useState(null);
  const {user} = useUser();

  return (
    <div {...oP}>
      <TextInput
        label='figma community url'
        onChange={setField(setFigmaUrl)}
        value={figmaUrl}
      />
      <TextButton
        disabled={toast != null}
        text='solve'
        onClick={async () => {
          const sol = new Solution({
            figmaUrl,
          });
          doCreateSolution(sol, challenge, user);
          setToast('you just solved a challenge, congrats');
        }}
      />
      { toast &&
      <Toast
        text={toast}
      />

      }
    </div>
  );
}

// TODO: write propTypes for SubmitSolutionForm
SubmitSolutionForm.propTypes = {
  challenge: propTypes.object,
};

const StyledSubmitSolutionForm = styled(SubmitSolutionForm)`
  gap: 1rem;
  display: flex;
  flex-flow: column;
`;

export default StyledSubmitSolutionForm;
