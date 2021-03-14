import React from 'react';
import IconStyles from './IconStyles';

export default function LinkedInIcon({ width }) {
  return (
    <IconStyles width={width} viewBox='0 0 42 42'>
      <title>{'linkedin'}</title>
      <g fill='none' fillRule='evenodd'>
        <path fill='#242E4C' d='M-661-144H779v295H-661z' />
        <rect
          stroke='#303E66'
          strokeWidth={2}
          fill='#181F33'
          x={1}
          y={1}
          width={40}
          height={40}
        />
        <path
          d='M30.6 9H11.4C10.08 9 9 10.08 9 11.4v19.2c0 1.32 1.08 2.4 2.4 2.4h19.2c1.32 0 2.4-1.08 2.4-2.4V11.4c0-1.32-1.08-2.4-2.4-2.4zM16.2 29.4h-3.6V18.6h3.6v10.8zm-1.8-12.84c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36h-3.6V18.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z'
          fill='#303E66'
        />
      </g>
    </IconStyles>
  );
}
