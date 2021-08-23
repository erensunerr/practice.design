import React from 'react'
import Button from './Button'
import google_logo from '../static/google_logo.svg';

export default {
    component: Button,
    title: 'Button',
}

const Template = args => <Button {...args} />

export const Default = Template.bind({});
Default.args = {
    text: "I'm a button.",
    disabled: false,
}


export const Disabled = Template.bind({})
Disabled.args = {
    ...Default.args,
    disabled: true,
}


export const withImage = Template.bind({})
withImage.args = {
    ...Default.args,
    img: {
        src: google_logo,
        alt: "google logo"
    }
}

export const withImageDisabled = Template.bind({});
withImageDisabled.args = {
    ...withImage.args,
    disabled: true,
}