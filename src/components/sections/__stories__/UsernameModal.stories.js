import React from 'react';
import UsernameModal from '../UsernameModal';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: UsernameModal,
  title: 'Sections / Username Modal',
};

const Template = (args) => <UsernameModal {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Mobile = (args) => (
  <MobileContainer><UsernameModal {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
