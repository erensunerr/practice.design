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
  solution: {
    by: {
      username: 'johntravolta',
      uid: 'adsfasfd',
    },
    challenge: {
      title: 'some title',
      id: 'asdfasafs',
    },
  },
};

export const Mobile = (args) => (
  <MobileContainer><SolutionCard {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
