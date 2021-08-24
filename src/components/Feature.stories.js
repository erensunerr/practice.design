import React from 'react';
import Feature from './Feature'
import styled from 'styled-components';

export default {
    component: Feature,
    title: 'Feature'
}

const Container = styled.div`
    width: 250px;
`


const Template = args => <Feature {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "design challenges",
    description:    `Educational design problems waiting to be solved by you.
                     You can create them too!`,
}

export const InContainer = args => <Container><Feature {...args} /></Container>;
InContainer.args = {
    ...Default.args
}