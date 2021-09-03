import React from 'react';

import Button from '../Button';
import Typography from '../../Typography';
import MobileContainer from '../../../utils/MobileContainer';


export default {
  component: Button,
  title: 'Atoms / Buttons / Button',
};

const Template = (args) => (
  <MobileContainer>
    <Button {...args} />
  </MobileContainer>
);

export const Default = Template.bind({});
Default.args = {
  children: [
    <Typography.BodyText key={0}>A textual child</Typography.BodyText>,
  ],
  onClick: () => {
    console.log('Button clicked.');
  },
};


export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: 'problems problems...',
};
