import React from 'react';
import LoginForm from './LoginForm';
import styled from 'styled-components';
import MobileContainer from './MobileContainer';

export default {
  component: LoginForm,
  title: 'Organisms / Login Form',
};

const Template = (args) => <LoginForm {...args} />;


const Container = styled.div`
    max-width: 300px;
`;

export const Default = Template.bind({});
Default.args = {

};

export const Mobile = () => (
  <MobileContainer>
    <LoginForm />
  </MobileContainer>
);

