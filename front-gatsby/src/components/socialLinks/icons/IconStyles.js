import styled from 'styled-components';

const IconStyles = styled.svg`
  width: ${({ width }) => width || '40px'};
  height: ${({ width }) => width || '40px'};

  &:hover {
    path {
      fill: ${({ color }) =>
        color !== 'secondary' ? 'var(--white)' : 'var(--light-blue)'}; //white;
    }

    rect {
      /* fill: var(--red); */
      fill: ${({ color }) =>
        color !== 'secondary' ? 'var(--red)' : 'var(--dark-blue)'};

      /* stroke: var(--light-red); */
      stroke: ${({ color }) =>
        color !== 'secondary' ? 'var(--light-red)' : 'var(--light-blue)'};
    }
  }
`;

export default IconStyles;
