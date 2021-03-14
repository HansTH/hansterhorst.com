import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoints';

export default function PortfolioItem({ data }) {
  const image = getImage(data.frontmatter.image);

  return (
    <PortfolioItemStyles>
      <div className='portfolio-image'>
        <GatsbyImage image={image} />
      </div>
      <div className='portfolio-text'>
        <h3>{data.frontmatter.title}</h3>
        <p>{data.frontmatter.description}</p>
        <h6>GEBRUIKTE TECHNIEKEN:</h6>
        <p>{data.frontmatter.stack}</p>
        <a className='button red-button' href={data.frontmatter.link}>
          {data.frontmatter.project}
        </a>
      </div>
    </PortfolioItemStyles>
  );
}

const PortfolioItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  height: 100%;

  :nth-child(even) {
    flex-direction: row-reverse;
  }

  .portfolio-image {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .portfolio-text {
    width: 40%;
    p,
    h6 {
      color: var(--white);
    }

    p {
      margin-bottom: 2rem;
    }
  }

  /* BREAKINGPOINTS */
  @media ${breakpoint.md} {
    .portfolio-image,
    .portfolio-text {
      width: 50%;
    }

    .mockup-images {
      height: 300px;
    }
  }

  @media ${breakpoint.sm} {
    flex-direction: column;

    :nth-child(even) {
      flex-direction: column;
    }

    .mockup-images {
      height: 230px;
    }

    .portfolio-text {
      width: 100%;
    }

    .portfolio-image {
      width: 100%;
    }
  }
`;
