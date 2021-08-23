import React, {useState} from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import {defaultTheme} from '../styles'
import hamburger_menu from "../../static/hamburger_menu_icon.svg"
import NavbarOption from './NavbarOption'
import NavbarOverlay from './NavbarOverlay'


const ButtonStyles = styled.button`
    &:hover {
        cursor: pointer;
    }
    padding: .5rem;
`

const NavbarStyles = styled.section`
    display: flex;
    position: sticky;
    justify-content: space-between;
    width: 100%;
    padding: 2.5rem 1rem;
    max-width: 1000px;
    margin: 0 auto;
`;

const BarOptionsStyles = styled.section`
    display: flex;
    gap: 1rem;

`

function Navbar({options}) {

    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggleExpanded = () => setIsExpanded(p => !p);

    // todo: add home page redirection
    const handleRedirectToHomePage = () => console.log("redirection to home page...");



    // 100 is average width of one bar option.
    const isMobile = (100*options.length + 200 > document.body.clientWidth );

    const barOptions = (!isMobile) && options.map((option, i) => <NavbarOption {...option} key={i} />);
    return (
        <NavbarStyles>
            <ButtonStyles onClick={handleRedirectToHomePage}>practice.design</ButtonStyles>

            {   (!isMobile) && 

                <BarOptionsStyles>
                    {barOptions}
                </BarOptionsStyles>
            }

            {   
                isMobile &&
                <ButtonStyles onClick={handleToggleExpanded}><img src={hamburger_menu} alt="hamburger menu icon"/></ButtonStyles>
            }

            {
                (isMobile && isExpanded) &&
                <NavbarOverlay options={options}/>
            }
        </NavbarStyles>
    )

}

Navbar.propTypes = {
    /**
     * list of option objects -> 
     * {onClick: func, text: string}
     */
    options: propTypes.arrayOf(
        propTypes.shape(NavbarOption.propTypes)
    )
};

export default Navbar;