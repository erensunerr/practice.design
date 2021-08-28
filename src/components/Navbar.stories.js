import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import MobileContainer from './MobileContainer';

export default {
  component: Navbar,
  title: 'Organisms / Navbar',
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    {text: 'First Option'},
    {text: 'Second Option'},
    {text: 'Third Option'},
  ],
};

export const Mobile = (args) =>
  <MobileContainer><Navbar {...args}/></MobileContainer>;

Mobile.args = {
  ...Default.args,
  isMobile: true,
};
