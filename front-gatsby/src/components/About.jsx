import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../styles/breakpoints';

export default function About() {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      about: markdownRemark(frontmatter: { subtitle: { eq: "Over Mij" } }) {
        id
        frontmatter {
          subtitle
          title
          info
        }
      }
      file(relativePath: { eq: "service-image.png" }) {
        childImageSharp {
          gatsbyImageData(width: 600, placeholder: BLURRED)
        }
      }
    }
  `);

  const image = getImage(data.file);
  const { frontmatter } = data.about;

  return (
    <AboutStyles id='about'>
      <div className='outline'>
        <div className='container'>
          <div className='about'>
            <div className='left'>
              <GatsbyImage image={image} />
            </div>
            <div className='right'>
              <h3>{frontmatter.subtitle}</h3>
              <h1>{frontmatter.title}</h1>
              <div className='body'>
                <div className='qoute'></div>
                <p>{frontmatter.info}</p>
                <div className='qoute'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

const AboutStyles = styled.section`
  padding: 13rem 0 0rem;

  .outline {
    outline: 2px solid var(--white);
  }

  .about {
    display: flex;
    align-items: center;
  }

  .left,
  .right {
    width: 50%;
  }

  @media ${breakpoint.sm} {
    padding: 10rem 0 0;

    .about {
      flex-direction: column;
    }

    .left,
    .right {
      width: 100%;
    }
  }
`;
