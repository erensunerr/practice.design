import React from 'react';
import CreateChallenge from '../CreateChallenge';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: CreateChallenge,
  title: 'Pages / Create Challenge',
};

const Template = (args) => <CreateChallenge {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const SomeState = Template.bind({});
SomeState.args = {
  ...Default.args,
};

export const Mobile = (args) => (
  <MobileContainer><CreateChallenge {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
