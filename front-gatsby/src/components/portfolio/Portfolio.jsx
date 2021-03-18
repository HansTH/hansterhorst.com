import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import CurveDown from '../curves/CurveDown';
import PortfolioItem from './PortfolioItem';
import { breakpoint } from '../../styles/breakpoints';

export default function Portfolio() {
  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      portfolio: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            date
            project
            stack
            link
            title
            description
            image {
              childImageSharp {
                gatsbyImageData(height: 400, placeholder: BLURRED, quality: 100)
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.portfolio.nodes.filter(
    (item) => item.frontmatter.project
  );

  return (
    <PortfolioStyled id='portfolio'>
      <CurveDown fillColor='var(--white' />
      <div className='portfolio'>
        <div className='outline'>
          <div className='container'>
            <h3>Portfolio</h3>
            <h2>Wat ik kan.</h2>
            <div className='portfolio'>
              {projects.map((project) => (
                <PortfolioItem data={project} key={project.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PortfolioStyled>
  );
}

const PortfolioStyled = styled.section`
  background-color: var(--blue);

  .outline {
    outline: 2px solid var(--blue);
  }

  @media ${breakpoint.sm} {
    h3 {
      margin: 3rem 0 0;
    }
  }
`;
