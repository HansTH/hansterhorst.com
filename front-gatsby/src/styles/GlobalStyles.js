import { createGlobalStyle } from 'styled-components';
import { breakpoint } from './breakpoints';

export const GlobalStyles = createGlobalStyle`

  :root{
    /* GLOBAL VARIABLES */

    /* colors */
    --blue: #242E4C;
    --dark-blue: #181F33;
    --light-blue: #303E66;
    --red: #F32D29;
    --light-red:#F37572;
    --white: #FFFFFF;
    
    /* border */
    --border-radius: 6px;
    --border-width: 3px;

    --maxWidth:1000px;
  }

  *{
    margin:0;
    padding: 0;
    box-sizing:border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *:before, *:after {
    box-sizing: inherit;
  }


  img {
    max-width: 100%;
    display: block;
  }

/*
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }
*/
  ol, ul {
    list-style: none;
  }

  .container {
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 1.2rem;
  }

  .button{
    padding: 1rem 2rem;
    color:var(--white);
    font-size: 1.8rem;
    font-weight: 700;
    transition: all ease-in-out 0.2s;
    display:inline-block;
  }

  .red-button{
    background-color:var(--red);
    border-radius: var(--border-radius);
    border: var(--border-width) solid var(--light-red);
    text-transform: capitalize;

    &:hover{
      background-color:var(--light-red);
      border-radius: var(--border-radius);
      border: var(--border-width) solid var(--red);
    }
  }

  .blue-button{
    background-color: var(--dark-blue);
    border-radius: var(--border-radius);
    border: var(--border-width) solid var(--light-blue);
    text-transform:capitalize;
    
    &:hover{
      background-color:var(--light-blue);
      border-radius: var(--border-radius);
      border: var(--border-width) solid var(--dark-blue);
    }
  }

  /* BREAKINGPOINTS */
  @media ${breakpoint.sm} {
    .button{
      font-size:1.5rem;
      padding: 0.8rem 1.8rem;
    }

  }

`;
