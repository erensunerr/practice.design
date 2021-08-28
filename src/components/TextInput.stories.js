import React from 'react';
import TextInput from './TextInput';
import MobileContainer from './MobileContainer';

export default {
  component: TextInput,
  title: 'Atoms / Text Input',
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'username',
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: 'Username already in-use. 😿',
};

export const Mobile = (args) => (
  <MobileContainer><TextInput {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
