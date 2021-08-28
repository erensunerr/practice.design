import React from 'react';
import Option from './Option';

export default {
  component: Option,
  title: 'Atoms / Option',
};

const Template = (args) => <Option {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'home',
  onClick: () => {
    console.log('Option clicked.');
  },
};

export const WithinParagraph =
  (args) =>
    <p>
      I am some text about some stuff.
      Here is a <Option text='link'/>. Interesting eh?
    </p>;
