import React from 'react';
import Icon from '../Icon';
import MobileContainer from '../../utils/MobileContainer';
import crossMenu from '../../../static/cross_menu_icon.svg';

export default {
  component: Icon,
  title: 'Atoms / Icon',
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: crossMenu,
  onClick: () => console.log('icon clicked'),
  alt: 'close menu',
};

export const Mobile = (args) => (
  <MobileContainer><Icon {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
