import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Typography from '../atoms/Typography';
import TextInput from '../atoms/TextInput';
import TextButton from '../atoms/Button/TextButton';
import {setField} from '../utils';
import getGrid from '../utils/getGrid';


/**
 * submit form for challenge and solutions
 */
function SubmitForm({onSubmit, error: propError, ...oP}) {
  const [figmaUrl, setFigmaUrl] = useState('');
  return (
    <div {...oP}>
      <TextInput
        label='figma community url'
        onChange={setField(setFigmaUrl)}
        value={figmaUrl}
        error={propError}
      />
      <TextButton
        text='submit'
        onClick={() => {
          onSubmit(figmaUrl);
        }}
      />
    </div>
  );
}

// TODO: write propTypes for SubmitForm
SubmitForm.propTypes = {
  onSubmit: propTypes.func,
  error: propTypes.string,
};

const StyledSubmitForm = styled(SubmitForm)`
  gap: 1rem;
  display: flex;
  flex-flow: column;
`;

export default StyledSubmitForm;
