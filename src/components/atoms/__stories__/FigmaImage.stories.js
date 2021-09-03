import React from 'react';
import FigmaImage from '../FigmaImage';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: FigmaImage,
  title: 'Atoms / Figma Image',
};

const Template = (args) => <FigmaImage {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Mobile = (args) => (
  <MobileContainer><FigmaImage {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
