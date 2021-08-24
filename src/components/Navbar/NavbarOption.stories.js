import React from 'react';
import NavbarOption from './NavbarOption';

export default {
    component: NavbarOption,
    title: "Navbar/Navbar Option",
}

const Template = args => <NavbarOption {...args} />

export const Default = Template.bind({});

Default.args = {
    text: "home",
};

