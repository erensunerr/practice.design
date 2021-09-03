import React from 'react';

import ChallengeCard from '../ChallengeCard';
import MobileContainer from '../../../utils/MobileContainer';

export default {
  component: ChallengeCard,
  title: 'Organisms / Cards / Challenge Card',
};

const Template = (args) => <ChallengeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Spotify Personas Exercise',
  by: {
    text: 'by @john123',
  },
  categories: [
    {text: 'wireframing'},
    {text: 'user personas'},
    {text: 'stories'},
    {text: 'mockups'},
    {text: 'some other long category'},
    {text: 'whats uppp'},
  ],
};

export const Mobile = (args) => (
  <MobileContainer><ChallengeCard {...args} /></MobileContainer>
);

Mobile.args = {
  ...Default.args,
};
