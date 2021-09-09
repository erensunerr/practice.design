import React from 'react';
import CreateChallengeForm from '../CreateChallengeForm';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: CreateChallengeForm,
  title: 'Sections / Create Challenge Form',
};

const Template = (args) => <CreateChallengeForm {...args} />;

export const Default = Template.bind({});
Default.args = {
};


export const Mobile = (args) => (
  <MobileContainer><CreateChallengeForm {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
