import React from 'react';

import Modal from '../Modal';
import MobileContainer from '../../utils/MobileContainer';
import Info from '../../atoms/Info';
import TextButton from '../../atoms/Button/TextButton';

export default {
  component: Modal,
  title: 'Organisms / Modal',
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <Info
      key={0}
      title='connect your figma account'
      text={` Figma is necessary for 
              submitting solutions and creating challenges.
            `}
    />,
    <TextButton key={1} text='proceed to figma.com' />,
  ],
};

export const SomeState = Template.bind({});
SomeState.args = {
  ...Default.args,
};

export const Mobile = (args) => (
  <MobileContainer><Modal {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
