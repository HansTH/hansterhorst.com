import React, { useState } from 'react';
import styled from 'styled-components';
import Menubutton from './MenuButton';
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';
import NavLogo from './NavLogo';

const navLinks = [
  {
    title: 'Over Mij',
    link: 'about',
  },
  {
    title: 'Portfolio',
    link: 'portfolio',
  },
  {
    title: 'Contact',
    link: 'contact',
  },
];

export default function Navbar({ socialLinks }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prevState) => !prevState);
  }
  return (
    <>
      <MobileMenu
        isOpen={isMenuOpen}
        navLinks={navLinks}
        toggleMenu={toggleMenu}
        socialLinks={socialLinks}
      />
      <NavbarStyles id='home'>
        <nav className='navbar'>
          <NavLogo />
          <NavLinks navLinks={navLinks} />
          <Menubutton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </nav>
      </NavbarStyles>
    </>
  );
}

const NavbarStyles = styled.header`
  width: 100%;
  background-color: rgba(24, 31, 51, 0.9);
  position: fixed;
  z-index: 100;
  backdrop-filter: blur(10px);

  .navbar {
    display: flex;
    justify-content: space-between;
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 1.5rem;
  }
`;
