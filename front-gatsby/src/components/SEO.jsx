import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const { description, title, author } = data.site.siteMetadata;

  return (
    <Helmet titleTemplate={`%s`}>
      <html lang='nl' />
      <title>{title}</title>
      {/* Fav Icons */}
      <link rel='icon' type='image/svg+xml' href='/HTHlogo.png' />
      <link rel='alternate icon' href='/HTHlogo.png' /> {/* fallback */}
      <link
        rel='apple-touch-icon'
        type='image/png'
        sizes='144x144'
        href='/HTHlogo.png'
      />
      {/* Meta Tags */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta charSet='utf-8' />
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content='ReactJS, GatsbyJS, Frontend Development, Webdeveloper, Webdesigner, JAMstack'
      />
      {/* Open Graph */}
      <meta property='og:title' content={title} key='ogtitle' />
      <meta property='og:type' content='website' key='ogtype' />
      <meta
        property='og:url'
        content='https://www.hansterhorst.com/'
        key='ogurl'
      />
      <meta property='og:locale' content='nl_NL' key='oglocale' />
      <meta property='og:image' content='/HTHlogo.png' key='ogimage' />
      <meta property='og:site_name' content={author} key='ogsitename' />
      <meta
        property='og:description'
        content={description}
        key='ogdescription'
      />
      {children}
    </Helmet>
  );
}
