import React from 'react';
import FindAChallenge from '../FindAChallenge';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: FindAChallenge,
  title: 'pages / Find A Challenge',
};

const Template = (args) => <FindAChallenge {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Mobile = (args) => (
  <MobileContainer><FindAChallenge {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
