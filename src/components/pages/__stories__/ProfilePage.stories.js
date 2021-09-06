import React from 'react';
import ProfilePage from '../ProfilePage';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: ProfilePage,
  title: 'Pages / Profile',
};

const Template = (args) => <ProfilePage {...args} />;

export const Default = Template.bind({});
Default.args = {
  uid: 'PeBVXyXcLA3n1h3vo8EYnZqYRXON',
};

export const Mobile = (args) => (
  <MobileContainer><ProfilePage {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
  mobile: true,
};
