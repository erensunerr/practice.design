import React from 'react';
import SubmitForm from '../SubmitForm';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: SubmitForm,
  title: 'Sections / Submit Form',
};

const Template = (args) => <SubmitForm {...args} />;

export const Default = Template.bind({});
Default.args = {
};


export const Mobile = (args) => (
  <MobileContainer><SubmitForm {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
