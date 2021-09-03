import React from 'react';
import AboutPage from '../AboutPage';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: AboutPage,
  title: 'Pages / About',
};

const Template = (args) => <AboutPage {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Mobile = (args) => (
  <MobileContainer><AboutPage {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
