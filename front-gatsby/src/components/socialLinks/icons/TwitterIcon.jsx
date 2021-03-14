import React from 'react';
import IconStyles from './IconStyles';

export default function TwitterIcon({ width }) {
  return (
    <IconStyles width={width} viewBox='0 0 42 42'>
      <title>{'twitter'}</title>
      <g fill='none' fillRule='evenodd'>
        <path fill='#242E4C' d='M-845-144H595v295H-845z' />
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
          d='M30.6 9H11.4C10.08 9 9 10.08 9 11.4v19.2c0 1.32 1.08 2.4 2.4 2.4h19.2c1.32 0 2.4-1.08 2.4-2.4V11.4c0-1.32-1.08-2.4-2.4-2.4zm-2.76 8.76c-.12 5.52-3.6 9.36-8.88 9.6-2.16.12-3.72-.6-5.16-1.44 1.56.24 3.6-.36 4.68-1.32-1.56-.12-2.52-.96-3-2.28.48.12.96 0 1.32 0-1.44-.48-2.4-1.32-2.52-3.24.36.24.84.36 1.32.36-1.08-.6-1.8-2.88-.96-4.32 1.56 1.68 3.48 3.12 6.6 3.36-.84-3.36 3.72-5.16 5.52-2.88.84-.12 1.44-.48 2.04-.72-.24.84-.72 1.32-1.32 1.8.6-.12 1.2-.24 1.68-.48-.12.6-.72 1.08-1.32 1.56z'
          fill='#303E66'
        />
      </g>
    </IconStyles>
  );
}
