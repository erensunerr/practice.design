import React from 'react';
import NavbarOverlay from './NavbarOverlay';


export default {
    component: NavbarOverlay,
    title: "Navbar Overlay"
};

const Template = args => <NavbarOverlay {...args} />

export const Default = Template.bind({});
Default.args = {
    options: [
        {
            onClick: () => {console.log("clicked hello")},
            text: "hello",
        },
        {
            onClick: () => {console.log("clicked second option")},
            text: "second option",
        }
    ]
}