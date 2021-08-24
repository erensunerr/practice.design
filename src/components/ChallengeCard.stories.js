import React from 'react';
import ChallengeCard from './ChallengeCard'

export default {
    component: ChallengeCard,
    title: 'Cards / ChallengeCard'
}

const Template = args => <ChallengeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    categories: [
        {name: "User Personas", href: "http://google.com"},
        {name: "Stories", href: "http://google.com"},
        {name: "Wireframe", href: "http://google.com"},
    ],
    by: {
        text: "@gerroo",
        href: "http://google.com"
    },
    img: {
        src: "http://picsum.photos/400"
    }
}

// export const SomeState = Template.bind({});
// SomeState.args = {
    
// }

