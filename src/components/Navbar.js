import React, {useState} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {defaultTheme} from './styles';
import hamburgerMenu from '../static/hamburger_menu_icon.svg';
import Option from './Option';

// Navbar Overlay

const NavbarOverlayStyles = styled.nav`
    position: absolute;
    padding: 2.5rem .5rem;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    gap: 1rem;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.light};
`;

/**
 * overlay for the mobile version of the navbar
 */
function NavbarOverlay({options}) {
  // TODO: add cross to quit overlay
  return (
    <NavbarOverlayStyles>
      {options.map((option, i) => <Option key={i} {...option}/>)}
    </NavbarOverlayStyles>
  );
}

NavbarOverlay.propTypes = {
  /**
     * array of option objects
     * {onClick, text}
     */
  options: propTypes.array.isRequired,
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
  return (
    <BarOptionsStyles>
      {
        options.map((option, i) => <Option {...option} key={i} />)
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
const Logo = () => (
  <LogoStyles text="practice.design" />
);

const NavbarStyles = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2.5rem 0;
    max-width: 1000px;
    margin: 0 auto;
`;

/**
 * basic navbar
 */
function Navbar({options, isMobile}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggleExpanded = () => setIsExpanded((p) => !p);

  // 100 is average width of one bar option.
  isMobile = isMobile ||
    (100*options.length + 200 > document.body.clientWidth);


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
                <NavbarOverlay options={options}/>
      }
    </NavbarStyles>
  );
}

Navbar.propTypes = {
  /**
     * list of option objects ->
     * {onClick: func, text: string}
     */
  options: propTypes.arrayOf(
      Option,
  ).isRequired,
  isMobile: propTypes.bool,
};

export default Navbar;
