import React from 'react';
import Card from './Card';
import Info from './Info';
import MobileContainer from './MobileContainer';
import FigmaImage from './FigmaImage';

export default {
  component: Card,
  title: 'Molecules / Cards / Card',
};

const Template = (args) => (
  <MobileContainer>
    <Card {...args} />
  </MobileContainer>
);

export const Default = Template.bind({});
Default.args = {
  children: [
    <FigmaImage
      key={0}
    />,
    <Info
      key={0}
      title='Generic Card'
      text='This generic card is very good and interesting.
      Further genericity may be achieved through fusion.'
    />,
  ],
};

