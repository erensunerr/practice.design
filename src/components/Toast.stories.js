import React from 'react';
import Toast from './Toast';

export default {
  component: Toast,
  title: 'Molecules / Toast',
};

const Template = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '🎉 Starting is 50% of the work!',
  onRemove: (id) => {
    console.log(`Toast ${id} removed.`);
  },
  visibleDuration: 3,
  id: 5,
};
