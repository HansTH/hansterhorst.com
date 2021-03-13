import { createGlobalStyle } from 'styled-components';
import { breakpoint } from './breakpoints';

// Fonts
import VollkornExtraBoldItalic from '../assets/fonts/Vollkorn-ExtraBoldItalic.woff';
import Roboto500 from '../assets/fonts/roboto-v20-latin-500.woff';
import Roboto700 from '../assets/fonts/roboto-v20-latin-700.woff';
import RobotoRegular from '../assets/fonts/roboto-v20-latin-regular.woff';

export const FontStyles = createGlobalStyle`

  @font-face {
    font-family: 'Vollkorn-ExtraBoldItalic';
    src: url(${VollkornExtraBoldItalic});
  }

  @font-face {
    font-family: 'Roboto500';
    src: url(${Roboto500});
  }
  @font-face {
    font-family: 'Roboto700';
    src: url(${Roboto700});
  }
  @font-face {
    font-family: 'RobotoRegular';
    src: url(${RobotoRegular});
  }

  html{
    font-family: 'RobotoRegular';
    font-size: 10px;
  }

  body{
    font-size: 1.8rem;
    color:var(--blue);
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }

  h1, h2{
    font-family:'Vollkorn-ExtraBoldItalic', serif;
    font-size:6rem;
    color: var(--blue);
    letter-spacing:-1px;
    line-height:1;
  }
  h2{
    color: var(--white);
  }

  h3{
    font-family:'Roboto700', sans-serif;
    font-size:2.5rem;
    color:var(--red)
  }
  h4{
    font-family:'Roboto700', sans-serif;
    font-size:2.2rem;
    color:var(--dark-blue)
  }

  h5,h6, a{
    font-family: 'Roboto500',sans-serif;
  }

  h5{
    font-size:2rem;
    color:var(--dark-blue);
  }
  h6{
    font-size:1.8rem;
    color:var(--red);
  }

  p{
    font-family:'RobotoRegular', sans-serif;
    line-height:1.3;
    color: var(--blue);
  }

  a{
    text-decoration:none;
  }

  /* BREAKINGPOINTS */
  @media ${breakpoint.md} {
    h1,h2{
      font-size: 5rem;
    }
    h3{
      font-size: 2.2rem;
    }
    h4{
      font-size: 2rem;
    }
  }

  @media ${breakpoint.sm} {
    h1,h2{
      font-size: 4.5rem;
    }
    h3{
      font-size: 2rem;
    }
    h4{
      font-size: 2rem;
    }
    h5{
      font-size: 1.8rem;
    }

    h6, p, a {
      font-size: 1.5rem;
      
    }

    input, textarea{
      font-size: 1.6rem;
    }

  }

  @media ${breakpoint.xs} {
    h1,h2{
      font-size:3.5rem;
    }

    h3{
      font-size: 2rem;
    }
    h4{
      font-size: 2rem;
    }
    h5{
      font-size: 1.6rem;
    }

  }
  
`;
