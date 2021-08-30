import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {Title, Bold, BodyText} from './Typography';
import Option from './Option';
import Info from './Info';
import SignupForm from './SignupForm';

const MetaInfoStyles = styled.div``;
const TitleSectionStyles = styled.section`
  display: flex;
  flex-flow: wrap;
  gap: 2rem;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  & > *:not(${Title}) {
    width: 33%;
    display: flex;
    flex-flow: column;
    gap: .5rem;
    button p {
      white-space: normal;
      text-align: left;
    }
  }
  ${Title} {
    width: min-content;
  }

  @media screen and (max-width: 600px) {
    & > *:not(${Title}) {
      flex: 1 0;
      min-width: 200px;
    }
  }
`;

const TitleSection = () => (
  <TitleSectionStyles>
    <Title>practice ui & ux design</Title>
    <MetaInfoStyles>
      <BodyText>
        <Bold>practice.design</Bold> is a free,
        challenge-based training platform for ui & ux design.
      </BodyText>
      <Option
        text='Read more about how I got the idea and my philosophy.'
        onClick={
          () => {
            console.log('redirecting to about');
          }
        }
      />
    </MetaInfoStyles>
  </TitleSectionStyles>
);

const FeaturesSectionStyles = styled.section`
  display: flex;
  gap: .5rem;
  row-gap: 1rem;
  flex-flow: wrap;
  & > * {
    flex: 1 0;
    width: 33%;
    min-width: 200px;
  }
`;

const FeaturesSection = () => (
  <FeaturesSectionStyles>
    <Info
      title='design challenges'
      text={` Educational design problems waiting to be solved by you. 
              You can create them too!`}
    />
    <Info
      title='playbooks'
      text={` Lists of learning resources by topic, so you won’t have to google.
              Everyone can suggest new resources. *work in progress 🚧
            `}
    />
    <Info
      title='community'
      text={` DMs and a chat room. Because at times I want someone other 
              than my cat to critique my designs. *work in progress 🚧
            `}
    />
  </FeaturesSectionStyles>
);

const SignupFormSectionStyles = styled.section`
  width: 33%;
  @media screen and (max-width: 600px) {
    & {
      width: 100%;
    }
  }
  
`;

const SignupFormSection = () => (
  <SignupFormSectionStyles>
    <SignupForm />
  </SignupFormSectionStyles>
);

const HomePageStyles = styled.section`
  display: flex;
  flex-flow: column;
  gap: 8rem;
  align-items: center;
`;

/**
 * home page
 */
function HomePage(props) {
  return (
    <HomePageStyles>
      <TitleSection />
      <FeaturesSection />
      <SignupFormSection />
    </HomePageStyles>
  );
}

export default HomePage;
