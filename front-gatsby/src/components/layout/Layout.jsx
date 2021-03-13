import React from 'react';
import { FontStyles } from '../../styles/FontStyles';
import { GlobalStyles } from '../../styles/GlobalStyles';
import SEO from '../SEO';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <GlobalStyles />
      <FontStyles />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
