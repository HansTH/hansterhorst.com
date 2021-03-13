import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoints';

export default function NavLinks({ navLinks }) {
  return (
    <NavLinksStyles>
      {navLinks.map(({ title, link }) => (
        <div key={title} className='nav-link'>
          <Link to={`#${link}`}>{title}</Link>
        </div>
      ))}
    </NavLinksStyles>
  );
}

const NavLinksStyles = styled.div`
  display: flex;
  align-items: flex-end;

  .nav-link {
    display: flex;
  }

  .nav-link a {
    color: var(--white);
    border-bottom: 4px solid transparent;
    padding-bottom: 2.5rem;

    &:hover {
      border-bottom: 4px solid var(--red);
    }
  }

  .nav-link:not(:last-child) {
    &:after {
      content: ' • ';
      margin: 0 1rem;
      color: var(--red);
      font-size: 2.5rem;
    }
  }

  /* BREAKINGPOINTS */
  @media ${breakpoint.sm} {
    display: none;
  }
`;
