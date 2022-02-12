import React from 'react';
import { FontStyles } from '../../styles/FontStyles';
import { GlobalStyles } from '../../styles/GlobalStyles';
import SEO from '../SEO';
import Footer from './Footer';
import Navbar from './Navbar';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/hansterhorst',
  },
  {
    name: 'LinkedIn',
    url: 'https://nl.linkedin.com/in/hansth',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/hbhterhorst/',
  },
];

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <GlobalStyles />
      <FontStyles />
      <Navbar socialLinks={socialLinks} />
      <main>{children}</main>
      <Footer socialLinks={socialLinks} />
    </>
  );
}
