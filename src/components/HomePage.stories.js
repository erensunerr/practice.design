import React from 'react';
import HomePage from './HomePage';
import MobileContainer from './MobileContainer';

export default {
  component: HomePage,
  title: 'HomePage',
};

const Template = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const SomeState = Template.bind({});
SomeState.args = {
  ...Default.args,
};

export const Mobile = (args) => (
  <MobileContainer><HomePage {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
