import React from 'react';
import CategoriesSelector from '../CategoriesSelector';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: CategoriesSelector,
  title: 'Organisms / Categories Selector',
};

const Template = (args) => <CategoriesSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  categories: [
    {text: 'wireframing'},
    {text: 'user personas'},
    {text: 'stories'},
    {text: 'mockups'},
    {text: 'some other long category'},
    {text: 'whats uppp'},
  ],
};


export const Mobile = (args) => (
  <MobileContainer><CategoriesSelector {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
