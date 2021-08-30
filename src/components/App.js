import React from 'react';
import styled from 'styled-components';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import {defaultTheme, GlobalStyle} from './styles';
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

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
  return (
    <>
      <Router>
        <ThemeProvider theme={defaultTheme}>
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
            </Switch>
          </ActiveAreaStyles>
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
