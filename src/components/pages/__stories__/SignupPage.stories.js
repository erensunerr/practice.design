import React from 'react';
import SignupPage from '../SignupPage';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: SignupPage,
  title: 'Pages / Signup',
};

const Template = (args) => <SignupPage {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Mobile = (args) => (
  <MobileContainer><SignupPage {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
