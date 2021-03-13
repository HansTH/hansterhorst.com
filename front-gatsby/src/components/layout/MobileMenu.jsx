import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export default function MobileMenu({ isOpen, navLinks, toggleMenu }) {
  return (
    <MobileMenuStyles isOpen={isOpen}>
      {navLinks &&
        navLinks.map((link, index) => (
          <Link
            key={index}
            to={`#${link.link}`}
            className='nav-link'
            onClick={toggleMenu}
          >
            {link.title}
          </Link>
        ))}
    </MobileMenuStyles>
  );
}

const MobileMenuStyles = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--blue);
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? '0px' : '-100%')};
  transition: top 0.3s ease-in-out;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .nav-link {
    font-size: 2.5rem;
    color: var(--white);
    padding: 2rem 0;

    &:hover,
    :focus {
      color: var(--red);
    }
  }

  .social-links {
    padding: 2rem 0;
  }
`;
