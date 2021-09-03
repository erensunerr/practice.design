import React from 'react';


import MobileContainer from '../../utils/MobileContainer';
import Navbar from '../Navbar';

export default {
  component: Navbar,
  title: 'Sections / Navbar',
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Mobile = (args) =>
  <MobileContainer><Navbar {...args}/></MobileContainer>;

Mobile.args = {
  ...Default.args,
  isMobile: true,
};
