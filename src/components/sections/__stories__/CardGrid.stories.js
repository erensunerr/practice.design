import React from 'react';
import CardGrid from '../CardGrid';
import ChallengeCard from '../../organisms/Card/ChallengeCard';
import MobileContainer from '../../utils/MobileContainer';

export default {
  component: CardGrid,
  title: 'Sections / Card Grid',
};

const cards = [
  {
    title: 'challenge title',
    id: 'xxyyzzchallengeid',
    by: {
      username: 'johnny',
      id: 'xxyyzzuserid',
    },
  },
  {
    title: 'challenge title',
    id: 'xxyyzzchallengeid',
    by: {
      username: 'johnny',
      id: 'xxyyzzuserid',
    },
  },
  {
    title: 'challenge title',
    id: 'xxyyzzchallengeid',
    by: {
      username: 'johnny',
      id: 'xxyyzzuserid',
    },
  },
  {
    title: 'challenge title',
    id: 'xxyyzzchallengeid',
    by: {
      username: 'johnny',
      id: 'xxyyzzuserid',
    },
  },
  {
    title: 'challenge title',
    id: 'xxyyzzchallengeid',
    by: {
      username: 'johnny',
      id: 'xxyyzzuserid',
    },
  },
];

const Template = (args) =>
  <CardGrid>
    {
      cards.map(
          (c, i) => <ChallengeCard key={i} challenge={c} />,
      )
    }
  </CardGrid>;

export const Default = Template.bind({});
Default.args = {
};

export const Mobile = (args) => (
  <MobileContainer><CardGrid {...args} /></MobileContainer>
);
Mobile.args = {
  ...Default.args,
};
