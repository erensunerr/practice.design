import React from 'react';

import MobileContainer from '../../utils/MobileContainer';
import LoginForm from '../LoginForm';


export default {
  component: LoginForm,
  title: 'Sections / Login Form',
};

const Template = (args) => <LoginForm {...args} />;


export const Default = Template.bind({});
Default.args = {

};

export const Mobile = () => (
  <MobileContainer>
    <LoginForm />
  </MobileContainer>
);

