import React from 'react';
import ImageButton from '../ImageButton';

import googleLogo from '../../../../static/google_logo.svg';
// TODO: import images with function
import MobileContainer from '../../../utils/MobileContainer';

export default {
  component: ImageButton,
  title: 'Atoms / Buttons / Image Button',
};

const Template = (args) => (
  <MobileContainer>
    <ImageButton {...args} />
  </MobileContainer>
);

export const Default = Template.bind({});
Default.args = {
  img: {
    src: googleLogo,
  },
  text: 'sign in with google',
  onClick: () => {
    console.log('Image button clicked.');
  },
};
