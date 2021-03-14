import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import CurveDown from '../curves/CurveDown';
import SocialLinks from '../socialLinks/SocialLinks';
import MobileIcon from '../socialLinks/icons/MobileIcon';
import EmailIcon from '../socialLinks/icons/EmailIcon';

export default function Footer({ socialLinks }) {
  return (
    <FooterStyles>
      <CurveDown fillColor='var(--dark-blue' />
      <div className='outline'>
        <div className='footer-contact'>
          <div className='contacts'>
            <div className='contact'>
              <a href='tel:0031611902568'>
                <MobileIcon />
              </a>
              <div className='contact-text'>
                <h6>Wil je liever bellen</h6>
                <p>06 • 11902568</p>
              </div>
            </div>
            <div className='contact'>
              <a href='mailto:hbhorst@mac.com'>
                <EmailIcon />
              </a>
              <div className='contact-text'>
                <h6>Stuur een email</h6>
                <p>hbhorst@mac.com</p>
              </div>
            </div>
          </div>
          <div className='footer-email'></div>
        </div>
        <SocialLinks links={socialLinks} />
        <div className='copyright'>
          <Link to='/'>
            &copy; www.hansterhorst.com • {new Date().getFullYear()}
          </Link>
        </div>
      </div>
    </FooterStyles>
  );
}

const FooterStyles = styled.div`
  background-color: var(--blue);

  .outline {
    padding: 1rem 0 2rem;
  }

  .footer-contact {
    margin-bottom: 3rem;

    .contacts,
    .contact {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .contact {
      padding-top: 0.5rem;
    }

    .contacts {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 1.2rem;
    }

    img {
      width: 200px;
    }

    .contact-text {
      margin-left: 1rem;
      p {
        font-weight: 400;
        color: var(--white);
      }
    }
  }

  .copyright {
    text-align: center;
    a {
      font-family: 'Vollkorn-ExtraBoldItalic', serif;
      color: var(--dark-blue);
      font-size: 2rem;

      &:hover {
        color: var(--red);
      }
    }
  }

  .footer-link {
    color: var(--dark-blue);

    &:hover,
    :focus {
      color: var(--red);
    }
  }
`;
