import React, {useState, useContext} from 'react';
import styled from 'styled-components';

import {useHistory} from 'react-router-dom';

import hamburgerMenu from '../../static/hamburger_menu_icon.svg';
import crossMenu from '../../static/cross_menu_icon.svg';
import Icon from '../atoms/Icon';
import Option from '../atoms/Option';
import doLogOut from '../../api/doLogOut';
import {UserContext} from '../UserContext';

// Options are spread to Option lolz

const anonymousNavbarOptions = (history) => [
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

const signedInNavbarOptions = (history, user) => [
  {
    text: `@${user.username}`,
    onClick: () => {
      history.push(`/user/${user.uid}`);
    },
  },
  {
    text: 'find a challenge',
    onClick: () => {
      history.push('/find');
    },
  },
  {
    text: 'my challenges',
    onClick: () => {
      history.push('/my_challenges');
    },
  },
  {
    text: 'settings',
    onClick: () => {
      history.push('/settings');
    },
  },
  {
    text: 'log out',
    onClick: () => {
      doLogOut();
    },
  },
];

const MobileOptionsStyles = styled.nav`
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

const DesktopOptionsStyles = styled.nav`
display: flex;
gap: 1rem;
`;


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
function Navbar({...oP}) {
  const {user} = useContext(UserContext);

  const history = useHistory();
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggleExpanded = () => setIsExpanded((p) => !p);

  let options = [];
  if (user) {
    options = signedInNavbarOptions(history, user);
  } else {
    options = anonymousNavbarOptions(history);
  }


  // 100 is average width of one bar option.
  const isMobile = (100*options.length + 250 > document.body.clientWidth);

  return (
    <NavbarStyles {...oP}>
      {/* Logo */}
      <Option
        onClick={
          () => {
            history.push('/');
          }
        }
        text='practice.design'
      />

      { // hamburger menu
        isMobile &&
                <Icon src={hamburgerMenu} onClick={handleToggleExpanded} />
      }

      { (!isMobile) && // desktop options
        <DesktopOptionsStyles>
          {
            options.map(
                (option, i) =>
                  <Option
                    {...option}
                    key={i}
                  />,
            )
          }
        </DesktopOptionsStyles>
      }

      {
        (isMobile && isExpanded) && // mobile options
        <MobileOptionsStyles>
          {
            options.map((option, i) =>
              <Option key={i} {...option} onClick={
                (e) => {
                  option.onClick(e);
                  handleToggleExpanded();
                }
              }/>)
          }
          <Icon src={crossMenu} onClick={handleToggleExpanded}/>
        </MobileOptionsStyles>
      }
    </NavbarStyles>
  );
}

Navbar.propTypes = {
};

export default Navbar;
