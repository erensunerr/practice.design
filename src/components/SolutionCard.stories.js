import React from 'react';
import SolutionCard from './SolutionCard'

export default {
    component: SolutionCard,
    title: 'Cards / SolutionCard'
}

const Template = args => <SolutionCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    img: {
        src: "http://picsum.photos/400"
    },
    by: {
        text: "@gerroo",
        href: "www.google.com"
    },

}

export const Alternate = Template.bind({});
Alternate.args = {
    ...Default.args,
    button: true,
    challengeTitle: "spotify personas"
}

