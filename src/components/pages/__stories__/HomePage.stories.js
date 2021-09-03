import React from 'react';

import HomePage from '../HomePage';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: HomePage,
  title: 'Pages / Home',
};

const Template = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Mobile = (args) => (
  <MobileContainer><HomePage {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
