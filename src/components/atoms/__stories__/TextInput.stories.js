import React from 'react';

import TextInput from '../TextInput';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: TextInput,
  title: 'Atoms / Inputs / Text',
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'username',
  value: '',
  onChange: () => {},
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: 'I am some error',
};

export const Mobile = (args) => (
  <MobileContainer><TextInput {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
