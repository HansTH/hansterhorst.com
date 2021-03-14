import React from 'react';
import IconStyles from './IconStyles';

export default function InstagramIcon({ width, color }) {
  return (
    <IconStyles width={width} height={width} viewBox='0 0 42 42' color={color}>
      <title>{'instagram'}</title>
      <g fill='none' fillRule='evenodd'>
        <path
          fill={color !== 'secondary' ? 'var(--blue)' : 'var(--red)'}
          d='M-753-144H687v295H-753z'
        />
        <rect
          stroke={
            color !== 'secondary' ? 'var(--light-blue)' : 'var(--light-red)'
          }
          strokeWidth={2}
          fill={color !== 'secondary' ? 'var(--dark-blue)' : 'var(--red)'}
          x={1}
          y={1}
          width={40}
          height={40}
        />
        <path
          d='M30.6 9H11.4C10.08 9 9 10.08 9 11.4v19.2c0 1.32 1.08 2.4 2.4 2.4h19.2c1.32 0 2.4-1.08 2.4-2.4V11.4c0-1.32-1.08-2.4-2.4-2.4zM21 16.2c2.64 0 4.8 2.16 4.8 4.8 0 2.64-2.16 4.8-4.8 4.8-2.64 0-4.8-2.16-4.8-4.8 0-2.64 2.16-4.8 4.8-4.8zm-9 14.4c-.36 0-.6-.24-.6-.6V19.8h2.52c-.12.36-.12.84-.12 1.2 0 3.96 3.24 7.2 7.2 7.2s7.2-3.24 7.2-7.2c0-.36 0-.84-.12-1.2h2.52V30c0 .36-.24.6-.6.6H12zm18.6-16.2c0 .36-.24.6-.6.6h-2.4c-.36 0-.6-.24-.6-.6V12c0-.36.24-.6.6-.6H30c.36 0 .6.24.6.6v2.4z'
          fill={color !== 'secondary' ? 'var(--light-blue)' : 'var(--white)'}
        />
      </g>
    </IconStyles>
  );
}
