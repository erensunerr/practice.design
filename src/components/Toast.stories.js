import React from 'react';
import Toast from './Toast'

export default {
    component: Toast,
    title: 'Toast'
}

const Template = args => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: "🎉 Starting is 50% of the work!",
}

export const Display = Template.bind({});
Display.args = {
    ...Default.args,
    removeMe: () => {},
    visibleDuration: 99999
}

