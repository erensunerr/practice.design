import React from 'react';
import MyChallenges from '../MyChallenges';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: MyChallenges,
  title: 'Pages / My Challenges',
};

const Template = (args) => <MyChallenges {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const SomeState = Template.bind({});
SomeState.args = {
  ...Default.args,
};

export const Mobile = (args) => (
  <MobileContainer><MyChallenges {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
