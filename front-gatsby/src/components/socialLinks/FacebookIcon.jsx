import React from 'react';
import SocialLinkStyles from './SocialLinkStyles';

export default function FacebookIcon() {
  return (
    <SocialLinkStyles width={42} height={42} viewBox="0 0 42 42">
      <title>{'facebook'}</title>
      <g fill="none" fillRule="evenodd">
        <path fill="#242E4C" d="M-569-144H871v295H-569z" />
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
          d="M30.6 9H11.4C10.08 9 9 10.08 9 11.4v19.2c0 1.32 1.08 2.4 2.4 2.4h19.2c1.32 0 2.4-1.08 2.4-2.4V11.4c0-1.32-1.08-2.4-2.4-2.4zm-1.2 2.4V15H27c-.72 0-1.2.48-1.2 1.2v2.4h3.6v3.6h-3.6v8.4h-3.6v-8.4h-2.4v-3.6h2.4v-3c0-2.28 1.92-4.2 4.2-4.2h3z"
          fill="#303E66"
        />
      </g>
    </SocialLinkStyles>
  );
}
