import React from 'react';
import styled from 'styled-components';

import Card from '../Card';
import Info from '../Info';
import MobileContainer from '../../utils/MobileContainer';
import FigmaImage from '../FigmaImage';


export default {
  component: Card,
  title: 'Atoms / Cards / Card',
};

const InfoStyles = styled(Info)`
  gap: 0;
`;

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
    <InfoStyles
      key={1}
      title='Generic Card'
      text='This generic card is very good and interesting.
      Further genericity may be achieved through fusion.'
    />,
  ],
};

