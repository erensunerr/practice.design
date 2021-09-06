import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import Typography from '../atoms/Typography';
import Option from '../atoms/Option';
import Info from '../atoms/Info';
import SignupForm from '../sections/SignupForm';

const MetaInfoStyles = styled.div``;

const TitleSectionStyles = styled.section`
  display: flex;
  flex-flow: wrap;
  gap: 2rem;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  & > *:not(${Typography.Title}) {
    width: 33%;
    display: flex;
    flex-flow: column;
    gap: .5rem;
    button p {
      white-space: normal;
      text-align: left;
    }
  }
  ${Typography.Title} {
    width: min-content;
  }

  @media screen and (max-width: 600px) {
    & > *:not(${Typography.Title}) {
      flex: 1 0;
      min-width: 200px;
    }
  }
`;

const TitleSection = () => {
  const history = useHistory();
  return (
    <TitleSectionStyles>
      <Typography.Title>practice ui & ux design</Typography.Title>
      <MetaInfoStyles>
        <Typography.BodyText>
          <Typography.Bold>practice.design</Typography.Bold> is a free,
        challenge-based training platform for ui & ux design.
        </Typography.BodyText>
        <Option
          text='Read more about how I got the idea and my philosophy.'
          onClick={
            () => {
              history.push('/about');
            }
          }
        />
      </MetaInfoStyles>
    </TitleSectionStyles>);
};

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
function HomePage({}) {
  return (
    <HomePageStyles>
      <TitleSection />
      <FeaturesSection />
      <SignupFormSection />
    </HomePageStyles>
  );
}

export default HomePage;
