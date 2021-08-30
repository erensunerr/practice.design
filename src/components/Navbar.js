import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {defaultTheme} from './styles';
import hamburgerMenu from '../static/hamburger_menu_icon.svg';
import crossMenu from '../static/cross_menu_icon.svg';
import Option from './Option';
import {useHistory} from 'react-router-dom';
import doLogOut from '../api/doLogOut';
import {getAuth} from 'firebase/auth';
import {UserContext} from './UserContext';

// Navbar Overlay

const NavbarOverlayStyles = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    background-color: ${(props) => props.theme.colors.light};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    padding: 4rem 2rem;
    gap: 1rem;
    * {
      padding: .5rem 1rem;
    }

`;

/**
 * overlay for the mobile version of the navbar
 */
function NavbarOverlay({options, onClose}) {
  return (
    <NavbarOverlayStyles>
      {options.map((option, i) => <Option key={i} {...option}/>)}
      <CrossMenu onClick={onClose}/>
    </NavbarOverlayStyles>
  );
}

NavbarOverlay.propTypes = {
  /**
     * array of option objects
     * {onClick, text}
     */
  options: propTypes.array.isRequired,
  onClose: propTypes.func,
};

// hamburger menu

const HamburgerMenuStyles = styled.button`
  display: flex;
  flex-flow: column;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  &, img {
    background-color: transparent;
  }
`;
/**
 * hamburger menu button
 */
const HamburgerMenu = ({onClick}) => (
  // TODO: replace hamburger with cross when its open
  <HamburgerMenuStyles
    onClick={onClick}>
    <img
      src={hamburgerMenu}
      alt="hamburger menu icon"/>
  </HamburgerMenuStyles>
);

HamburgerMenu.propTypes = {
  onClick: propTypes.func,
};

const CrossMenu = ({onClick}) => (
  <HamburgerMenuStyles
    onClick={onClick}>
    <img
      src={crossMenu}
      alt="cross to close the menu" />
  </HamburgerMenuStyles>
);

CrossMenu.propTypes = {
  onClick: propTypes.func,
};

// Bar Options

const BarOptionsStyles = styled.section`
    display: flex;
    gap: 1rem;
`;

/**
 * desktop version of navbar overlay basically
 * the links on the right side
 */
const BarOptions = ({options}) => {
  const history = useHistory();
  return (
    <BarOptionsStyles>
      {
        options.map(
            (option, i) =>
              <Option
                {...option}
                key={i}
              />,
        )
      }
    </BarOptionsStyles>
  );
};

BarOptions.propTypes = {
  options: propTypes.array.isRequired,
};

// Logo

const LogoStyles = styled(Option)`
  text-decoration: none;
`;
const Logo = () => {
  const history = useHistory();
  return (
    <LogoStyles onClick={
      () => {
        history.push('/');
      }
    }
    text='practice.design'
    />);
};


const NavbarStyles = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2.5rem 2.5rem;
    padding-top: 4rem;
    max-width: 1200px;
    margin: 0 auto;
`;

/**
 * basic navbar
 */
function Navbar() {
  const user = useContext(UserContext);
  const history = useHistory();

  const SignedInNavbarOptions = [
    {
      text: 'my challenges',
      onClick: () => {
        console.log('redirecting to my challenges');
      },
    },
    {
      text: 'settings',
      onClick: () => {
        console.log('redirecting to settings');
      },
    },
    {
      text: 'log out',
      onClick: () => {
        doLogOut();
      },
    },
  ];

  const AnonymousNavbarOptions = [
    {
      text: 'about',
      onClick: () => {
        history.push('/about');
      },
    },
    {
      text: 'sign up',
      onClick: () => {
        history.push('/signup');
      },
    },
    {
      text: 'login',
      onClick: () => {
        history.push('/login');
      },
    },
  ];

  let options = [];
  if (user) {
    options = SignedInNavbarOptions;
  } else {
    options = AnonymousNavbarOptions;
  }
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggleExpanded = () => setIsExpanded((p) => !p);

  // 100 is average width of one bar option.
  const isMobile = (100*options.length + 250 > document.body.clientWidth);

  return (
    <NavbarStyles>
      <Logo />
      { (!isMobile) &&
                <BarOptions options={options} />
      }
      { // hamburger menu
        isMobile &&
                <HamburgerMenu onClick={handleToggleExpanded} />
      }

      {
        (isMobile && isExpanded) &&
                <NavbarOverlay options={options}
                  onClose={handleToggleExpanded}
                />
      }
    </NavbarStyles>
  );
}

Navbar.propTypes = {
};

export default Navbar;
