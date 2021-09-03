import React from 'react';

import Toast from '../Toast';

export default {
  component: Toast,
  title: 'Atoms / Toast',
};

const Template = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '🎉 Starting is 50% of the work!',
  onRemove: (id) => {
    (`Toast ${id} removed.`);
  },
  visibleDuration: 3,
  id: 5,
};
