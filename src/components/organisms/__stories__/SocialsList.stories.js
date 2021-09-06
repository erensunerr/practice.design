import React from 'react';
import SocialsList from '../SocialsList';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: SocialsList,
  title: 'Organisms / Socials List',
};

const Template = (args) => <SocialsList {...args} />;

export const Default = Template.bind({});
Default.args = {
};


export const Mobile = (args) => (
  <MobileContainer><SocialsList {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
