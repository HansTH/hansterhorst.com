/*
import React from 'react';
import styled from 'styled-components';

// icons
import FacebookIcon from './FacebookIcon';
import GithubIcon from './GithubIcon';
import InstagramIcon from './InstagramIcon';
import LinkedInIcon from './LinkedInIcon';
import TwitterIcon from './TwitterIcon';

export default function SocialLinks() {
  return (
    <SocialLinksStyles>
      <a href="/" className="social-link">
        <FacebookIcon />
      </a>
      <a href="/">
        <InstagramIcon />
      </a>
      <a href="https://github.com/hthmedia">
        <GithubIcon />
      </a>
      <a href="/">
        <LinkedInIcon />
      </a>
      <a href="/">
        <TwitterIcon />
      </a>
    </SocialLinksStyles>
  );
}

const SocialLinksStyles = styled.div`
  display: flex;

  a:not(:last-child) {
    margin-right: 3rem;
  }
`;
*/

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// social links icons
import InstagramIcon from './InstagramIcon';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';

export default function SocialLinks({
  links,
  flexDirection = 'row',
  color = 'var(--blue)',
  hoverColor = 'var(--red)',
  width = 41,
}) {
  const [instagram, setInstagram] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');

  useEffect(() => {
    links &&
      links.map((link) => {
        if (link.name.toLowerCase() === 'instagram')
          return setInstagram(link.url);
        if (link.name.toLowerCase() === 'github') return setGithub(link.url);
        if (link.name.toLowerCase() === 'linkedin')
          return setLinkedin(link.url);
        return null;
      });
  }, [links]);

  return (
    <SocialLinksStyles flexDirection={flexDirection} width={width}>
      <div className='social-link'>
        <a href={linkedin}>
          <LinkedinIcon color={color} hoverColor={hoverColor} />
        </a>
      </div>
      <div className='social-link'>
        <a href={github}>
          <GithubIcon color={color} hoverColor={hoverColor} />
        </a>
      </div>
      <div className='social-link'>
        <a href={instagram}>
          <InstagramIcon color={color} hoverColor={hoverColor} />
        </a>
      </div>
    </SocialLinksStyles>
  );
}

const SocialLinksStyles = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;

  .social-link {
    margin: 0 1rem;

    a {
      height: ${({ width }) => width};
    }
  }
`;
