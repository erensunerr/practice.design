import React from 'react';
import SocialsList from './SocialsList';
import MobileContainer from './MobileContainer';

export default {
  component: SocialsList,
  title: 'SocialsList',
};

const Template = (args) => <SocialsList {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const SomeState = Template.bind({});
SomeState.args = {
  ...Default.args,
};

export const Mobile = (args) => (
  <MobileContainer><SocialsList {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
