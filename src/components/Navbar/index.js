import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, LogoU, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';


const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        return () => window.removeEventListener('scroll', changeNav);
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }} >

                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>H<LogoU>U</LogoU>B </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                    to="about"
                                    smooth={true}
                                    duration={500} spy={true}
                                    exact='true' offset={-80}>
                                    About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="discover"
                                    smooth={true}
                                    duration={500} spy={true}
                                    exact='true' offset={-80}>
                                    discover
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="services"
                                    smooth={true}
                                    duration={500} spy={true}
                                    exact='true' offset={-80}>
                                    services
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="signup"
                                    smooth={true}
                                    duration={500} spy={true}
                                    exact='true' offset={-80}>
                                    Reach out
                                </NavLinks>
                            </NavItem>
                        </NavMenu>

                        <NavBtn>
                            {/* <NavBtnLink to="/signin">contact us</NavBtnLink> */}
                        </NavBtn>
                    </NavbarContainer>
                </Nav>

            </IconContext.Provider>
        </>
    )
}

export default Navbar
