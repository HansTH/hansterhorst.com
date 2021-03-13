import React from 'react';
import styled from 'styled-components';

export default function CurveDown({ fillColor }) {
  return (
    <CurveStyle viewBox="0 0 1440 200">
      <title>{'Path 2'}</title>
      <path
        d="M0 0c0 55.228 44.772 100 100 100h1240c55.228 0 100 44.772 100 100V0H0z"
        fill={fillColor}
        fillRule="evenodd"
      />
    </CurveStyle>
  );
}

const CurveStyle = styled.svg`
  width: 100%;
`;
