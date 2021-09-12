import React from 'react';
import styled from 'styled-components';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import '../api/firebase_init';
import {defaultTheme, GlobalStyle} from './styles';
import {UserContextProvider} from './UserContext';
import '../api/challenge';

import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import MyChallenges from './pages/MyChallenges';
import CreateChallenge from './pages/CreateChallenge';
import FindAChallenge from './pages/FindAChallenge';

// TODO: add theme variable for touchscreen.

const ActiveAreaStyles = styled.section`
  padding: 8rem 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

/**
 * practice.design lol
 */
function App() {
  // TODO: extract all context providers into one global provider
  return (
    <>
      <Router>
        <ThemeProvider theme={defaultTheme}>
          <UserContextProvider>
            <GlobalStyle />
            <Navbar />
            <ActiveAreaStyles>
              <Switch>
                <Route path='/' exact>
                  <HomePage />
                </Route>
                <Route path='/about' exact>
                  <AboutPage />
                </Route>
                <Route path='/login' exact>
                  <LoginPage />
                </Route>
                <Route path='/signup' exact>
                  <SignupPage />
                </Route>
                <Route path='/settings' exact>
                  <SettingsPage />
                </Route>
                <Route path='/user/:uid' exact>
                  <ProfilePage />
                </Route>
                <Route path='/my_challenges' exact>
                  <MyChallenges />
                </Route>
                <Route path='/create' exact>
                  <CreateChallenge />
                </Route>
                <Route path='/find' exact>
                  <FindAChallenge />
                </Route>
              </Switch>
            </ActiveAreaStyles>
            <Footer />
          </UserContextProvider>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
