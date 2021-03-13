import React from 'react';
import styled from 'styled-components';

export default function CurveTop({ fillColor }) {
  return (
    <CurveStyle viewBox='0 0 1440 200'>
      <title>{'Path 2'}</title>
      <path
        d='M1440 200c0-55.228-44.772-100-100-100H100C44.772 100 0 55.228 0 0v200h1440z'
        fill={fillColor}
        fillRule='evenodd'
      />
    </CurveStyle>
  );
}

const CurveStyle = styled.svg`
  width: 100%;
`;
