import React from 'react';
import AboutPage from './AboutPage';
import MobileContainer from './MobileContainer';

export default {
  component: AboutPage,
  title: 'AboutPage',
};

const Template = (args) => <AboutPage {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const SomeState = Template.bind({});
SomeState.args = {
  ...Default.args,
};

export const Mobile = (args) => (
  <MobileContainer><AboutPage {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
