import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// social links icons
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import InstagramIcon from './icons/InstagramIcon';

export default function SocialLinks({
  links,
  flexDirection = 'row',
  color = 'var(--blue)',
  hoverColor = 'var(--red)',
  width = 40,
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
    <SocialLinksStyles flexDirection={flexDirection}>
      <div className='social-link'>
        <a href={github}>
          <GithubIcon color={color} hoverColor={hoverColor} width={width} />
        </a>
      </div>
      <div className='social-link'>
        <a href={linkedin}>
          <LinkedinIcon color={color} hoverColor={hoverColor} width={width} />
        </a>
      </div>
      <div className='social-link'>
        <a href={instagram}>
          <InstagramIcon color={color} hoverColor={hoverColor} width={width} />
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
  }
`;
