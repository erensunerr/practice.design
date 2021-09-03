import React from 'react';

import SolutionCard from '../SolutionCard';
import MobileContainer from '../../../utils/MobileContainer';

export default {
  component: SolutionCard,
  title: 'Organisms / Cards / Solution Card',
};

const Template = (args) => <SolutionCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Spotify Personas',
  by: {
    text: 'solved by @johntravolta',
  },
};

export const Mobile = (args) => (
  <MobileContainer><SolutionCard {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
