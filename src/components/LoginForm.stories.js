import React from 'react';
import LoginForm from './LoginForm'
import styled from 'styled-components'


export default {
    component: LoginForm,
    title: 'LoginForm'
}

const Template = args => <LoginForm {...args} />;


const Container = styled.div`
    max-width: 300px;
`

export const Default = Template.bind({});
Default.args = {

}

export const WithContainer = () => <Container><LoginForm /></Container>;

