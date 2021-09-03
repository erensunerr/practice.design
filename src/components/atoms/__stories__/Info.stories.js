import React from 'react';
import Info from '../Info';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: Info,
  title: 'Atoms / Info',
};

const Template = (args) => <Info {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Subtitles are very interesting',
  text: `Here's why. 
         Because they give context about this 
         ridiculous piece of writing`,
};

export const Mobile = (args) => (
  <MobileContainer>
    <Info {...args} />
  </MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
