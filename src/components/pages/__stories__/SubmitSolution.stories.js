import React from 'react';
import SubmitSolution from '../SubmitSolution';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: SubmitSolution,
  title: 'Pages / Submit Solution',
};

const Template = (args) => <SubmitSolution {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Mobile = (args) => (
  <MobileContainer><SubmitSolution {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
