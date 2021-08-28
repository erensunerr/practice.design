import React from 'react';
import Tag from './Tag';

export default {
  component: Tag,
  title: 'Atoms / Tag',
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Wireframes',
  onStatusChange: (value) => {
    console.log(`Tag is ${value ? '' : 'not'} selected.`);
  },
};

export const Static = Template.bind({});
Static.args = {
  ...Default.args,
  static: true,
};
