import React from 'react';
import styled from 'styled-components';

export default function Container({ children, bgc = 'var(--blue)' }) {
  return (
    <ContainerStyles bgc={bgc}>
      <div className='container'>{children}</div>
    </ContainerStyles>
  );
}

const ContainerStyles = styled.section`
  background-color: ${({ bgc }) => bgc};

  .container {
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 1.2rem;
  }
`;
