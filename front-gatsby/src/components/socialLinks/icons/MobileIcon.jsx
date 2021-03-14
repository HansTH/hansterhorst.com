import React from 'react';
import IconStyles from './IconStyles';

export default function MobileIcon({ width }) {
  return (
    <IconStyles width={width} viewBox='0 0 42 42'>
      <title>{'mobile-icon'}</title>
      <g fill='none' fillRule='evenodd'>
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
          d='M28.2 19.4c-1.867 3.733-5.067 6.8-8.8 8.8l-2.933-2.933c-.4-.4-.934-.534-1.334-.267-1.466.533-3.066.8-4.8.8-.8 0-1.333.533-1.333 1.333v4.534c0 .8.533 1.333 1.333 1.333C22.867 33 33 22.867 33 10.333 33 9.533 32.467 9 31.667 9H27c-.8 0-1.333.533-1.333 1.333 0 1.6-.267 3.2-.8 4.8-.134.4 0 .934.266 1.334L28.2 19.4z'
          fill='#303E66'
        />
      </g>
    </IconStyles>
  );
}
