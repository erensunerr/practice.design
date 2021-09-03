import React from 'react';
import LoginPage from '../LoginPage';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: LoginPage,
  title: 'Pages / Login',
};

const Template = (args) => <LoginPage {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const SomeState = Template.bind({});
SomeState.args = {
  ...Default.args,
};

export const Mobile = (args) => (
  <MobileContainer><LoginPage {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
