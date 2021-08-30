import React from 'react';
import SignupPage from './SignupPage';
import MobileContainer from './MobileContainer';

export default {
  component: SignupPage,
  title: 'SignupPage',
};

const Template = (args) => <SignupPage {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const SomeState = Template.bind({});
SomeState.args = {
  ...Default.args,
};

export const Mobile = (args) => (
  <MobileContainer><SignupPage {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
