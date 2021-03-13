import styled from 'styled-components';

const SocialLinkStyles = styled.svg`
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

export default SocialLinkStyles;
