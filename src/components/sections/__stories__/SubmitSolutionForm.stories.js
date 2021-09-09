import React from 'react';
import SubmitSolutionForm from '../SubmitSolutionForm';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: SubmitSolutionForm,
  title: 'Sections / Submit Solution Form',
};

const Template = (args) => <SubmitSolutionForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  challenge: {
    id: '5ZjryANfOHfyVh9bR4LV',
    title: 'bb',
  },
};


export const Mobile = (args) => (
  <MobileContainer><SubmitSolutionForm {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
