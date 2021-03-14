import styled from 'styled-components';

const IconStyles = styled.svg`
  width: ${({ width }) => width || '40px'};
  height: ${({ width }) => width || '40px'};

  &:hover {
    path {
      fill: white;
    }

    rect {
      fill: var(--red);
      stroke: var(--light-red);
    }
  }
`;

export default IconStyles;
