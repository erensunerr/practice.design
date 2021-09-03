import React from 'react';
import styled from 'styled-components';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import {defaultTheme, GlobalStyle} from './styles';
import '../api/firebase_init';
import {UserContextProvider} from './UserContext';

import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SettingsPage from './pages/SettingsPage';

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
