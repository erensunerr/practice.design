import React from 'react';
import Navbar from './Navbar';

export default {
    component: Navbar,
    title: "Navbar/Navbar"
}

const Template = args => <Navbar {...args} />

export const Default = Template.bind({});
Default.args = {
    options: [
        {
            onClick: () => {},
            text: "home",
        },
        {
            onClick: () => {},
            text: "my profile",
        },
        {
            onClick: () => {},
            text: "challenges",
        },
        {
            onClick: () => {},
            text: "playbooks",
        },
        {
            onClick: () => {},
            text: "messages",
        },
    ]
}