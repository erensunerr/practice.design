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
  challenge: {
    title: 'challenge title',
    id: 'xxchallengexxid',
    by: {
      username: 'johnny',
      uid: 'somexxuidxx',
    },
  },
};

export const Mobile = (args) => (
  <MobileContainer><ChallengeCard {...args} /></MobileContainer>
);

Mobile.args = {
  ...Default.args,
};
