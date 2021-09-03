import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Typography from '../atoms/Typography';
import TextButton from '../atoms/Button/TextButton';

const ParGridStyles = styled.section`
  display: flex;
  flex-flow: wrap;
  gap: 2rem;
  width: 50%;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    & {
      width: 100%;
    }
  }
  
`;

const Intro = () => (
  <>
    <Typography.BodyText>
      hello 👋,
    </Typography.BodyText>
    <Typography.BodyText>
      I’m Eren, the designer and developer of practice.design.
      I’m a grade 11 student from Ottawa, Canada.
    </Typography.BodyText>
    <Typography.BodyText>
      In the following paragraphs I’ll talk a little bit about
      practice.design, my personal design & development philosophy
      and the future of practice.design.
    </Typography.BodyText>
  </>
);

const Story = () => (
  <>
    <Typography.Subtitle>practice.design’s story</Typography.Subtitle>
    <Typography.BodyText>
      I came up with this idea of challenge-based training for design while
      I was trying to learn ux / ui design through a book.
    </Typography.BodyText>
    <Typography.BodyText>
      You see, I learned programming mostly through practice / problem solving
      (on platforms like codingame or frontendmentor). I find this type of
      structured practice much more enjoyable than more passive forms of
      learning like taking a course or reading a book without applying
      your newfound knowledge.
    </Typography.BodyText>
    <Typography.BodyText>
      I could not find a reliable source of educational design challenges
      so I built one.
    </Typography.BodyText>
  </>
);


const DesignAndDevelopment = () => (
  <>
    <Typography.Subtitle>design and development</Typography.Subtitle>
    <Typography.BodyText>
      I love programming and ux / ui design, but I’m not a professional.
      I built this in my bedroom, not a corporate office and just by myself,
      which means I might have some really wrong views.
      Please point these out to me. I’d love to improve.
    </Typography.BodyText>
    <Typography.BodyText>
      I believe that a purpose of ux design is to bridge the gap between
      the users and the creators of a system. That’s why I have user personas,
      and most ux processes I found include some sort of empathizing step.
    </Typography.BodyText>
    <Typography.BodyText>
      During my design process I like doing some user interviews.
      These interviews help me emphatize with you, the user.
      They usually go for about 10 - 15 minutes and are pretty fun.
    </Typography.BodyText>
    <TextButton
      text='👏 sign up for user interviews 👏'
      error='You can always sign up for user interviews in the settings page 🤝'
      onClick={() => console.log('give toast about user interviews')}
    />
    <Typography.BodyText>
      In order to truly bridge the gap though, not only do I need to
      understand you, the user, but some of you also need to understand me.
      I want to design this thing with you.
    </Typography.BodyText>
    <Typography.BodyText>
      I believe true understanding comes from open and honest communication.
      That’s why I have all of my design documents
      (which are a google doc and a figma lol) openly shared below.
      Both of these are in suggestion mode, so you can go ahead and make
      any change on the doc, or write a comment on figma and
      I will try to implement it or at least like consider it.
    </Typography.BodyText>
    <TextButton
      text='google doc'
      onClick={
        () =>
          window.open('https://docs.google.com/document/d/1YJKfVWPmcYxHGAe2iebRpgZOD63QjThSvlBff5lY2Yg/edit?usp=sharing', '_blank')
      }
    />
    <TextButton
      text='figma'
      onClick={
        () =>
          window.open('https://www.figma.com/file/8Ho6oGCdq57xGMQlz3raQV/practice.design', '_blank')
      }
    />
  </>
);


const AboutPageStyles = styled.section`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  gap: 4rem;
`;

const TitleStyles = styled(Typography.Title)`
  width: 100%;
`;
/**
 * About page lolz
 */
function AboutPage(props) {
  return (
    <AboutPageStyles>
      <TitleStyles>about</TitleStyles>
      <ParGridStyles>
        <Intro />
        <Story />
        <DesignAndDevelopment />
      </ParGridStyles>
    </AboutPageStyles>
  );
}

AboutPage.propTypes = {
};

export default AboutPage;
