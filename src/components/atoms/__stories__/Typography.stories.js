import React from 'react';

import Typography from '../Typography';

/**
 * a demo component for typographic styles,
 * only used in the associated story
 */
function TypographyDemo() {
  return (
    <div>
      <Typography.Title>{`I'm a title`}</Typography.Title>
      <Typography.Subtitle>{`I'm a subtitle`}</Typography.Subtitle>
      <Typography.BodyText>
        {`I'm some body text. 
          John Green is a great guy who has a big mustache.`}
      </Typography.BodyText>
      <Typography.SmallText>
        {`I'm some small text. 
          John Green is a great guy who has a big mustache.`}
      </Typography.SmallText>
    </div>
  );
}

export default {
  component: TypographyDemo,
  title: 'Atoms / Typography',
};

export const Default = (args) => <TypographyDemo />;

export const Title = (args) =>
  <Typography.Title>I am a title</Typography.Title>;

export const Subtitle = (args) =>
  <Typography.Subtitle>I am a subtitle</Typography.Subtitle>;

export const BodyText = (args) =>
  <Typography.BodyText>I am some body text</Typography.BodyText>;

export const SmallText = (args) =>
  <Typography.SmallText>I am some small text</Typography.SmallText>;

export const Bold = (args) =>
  <Typography.BodyText>
    I am some <Typography.Bold>bolded</Typography.Bold> body text
  </Typography.BodyText>;

