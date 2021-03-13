import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoints';

export default function NavLogo() {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      file(relativePath: { eq: "HTHlogo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 70)
        }
      }
    }
  `);
  const image = getImage(data.file);
  return (
    <NavLogoStyles>
      <Link to='/'>
        <GatsbyImage image={image} />
      </Link>
    </NavLogoStyles>
  );
}

const NavLogoStyles = styled.div`
  padding: 1rem 0;

  svg {
    width: 200px;
  }

  @media ${breakpoint.sm} {
    img {
      width: 50px;
    }
  }
`;
