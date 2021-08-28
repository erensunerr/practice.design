import React from 'react';
import Button from './Button';
import {BodyText} from './Typography';
import MobileContainer from './MobileContainer';

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
    <BodyText key={0}>A textual child</BodyText>,
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
