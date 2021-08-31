import React from 'react';
import SettingsPage from './SettingsPage';
import MobileContainer from './MobileContainer';

export default {
  component: SettingsPage,
  title: 'Pages / Settings',
};

const Template = (args) => <SettingsPage {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const SomeState = Template.bind({});
SomeState.args = {
  ...Default.args,
};

export const Mobile = (args) => (
  <MobileContainer><SettingsPage {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
