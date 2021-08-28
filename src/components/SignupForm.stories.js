import React from 'react';
import SignupForm from './SignupForm';
import MobileContainer from './MobileContainer';

export default {
  component: SignupForm,
  title: 'Organisms / Signup Form',
};

const Template = (args) => <SignupForm {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Mobile = (args) => (
  <MobileContainer><SignupForm {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
