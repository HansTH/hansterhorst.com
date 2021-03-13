import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Layout from '../components/layout/Layout';
import Portfolio from '../components/portfolio/Portfolio';

export default function IndexPage() {
  return (
    <Layout>
      <About />
      <Portfolio />
      <Contact />
    </Layout>
  );
}
