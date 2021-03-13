import React from 'react';
import SocialLinkStyles from './SocialLinkStyles';

export default function EmailIcon() {
  return (
    <SocialLinkStyles width={42} height={42} viewBox="0 0 42 42">
      <title>{'mobile-icon'}</title>
      <g fill="none" fillRule="evenodd">
        <rect
          stroke="#303E66"
          strokeWidth={2}
          fill="#181F33"
          x={1}
          y={1}
          width={40}
          height={40}
        />
        <path
          d="M31.4 11H10.6C9.17 11 8 12.125 8 13.5v15c0 1.375 1.17 2.5 2.6 2.5h20.8c1.43 0 2.6-1.125 2.6-2.5v-15c0-1.375-1.17-2.5-2.6-2.5zm0 5L21 22.25 10.6 16v-2.5L21 19.75l10.4-6.25V16z"
          fill="#303E66"
        />
      </g>
    </SocialLinkStyles>
  );
}
