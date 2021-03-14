import React from 'react';
import IconStyles from './IconStyles';

export default function GithubIcon({ width, color }) {
  return (
    <IconStyles width={width} viewBox='0 0 42 42' color={color}>
      <title>{'github'}</title>
      <g fill='none' fillRule='evenodd'>
        <path
          fill={color !== 'secondary' ? 'var(--blue)' : 'var(--red)'}
          d='M-855-306H585v429H-855z'
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
          d='M17.027 27.842c0 .097-.11.174-.251.174-.16.015-.271-.063-.271-.174 0-.097.111-.174.251-.174.146-.015.271.063.271.174zm-1.504-.218c-.034.097.062.208.208.237.125.049.27 0 .3-.096.029-.097-.063-.209-.208-.252-.126-.034-.267.014-.3.111zm2.138-.082c-.14.034-.237.126-.222.237.014.097.14.16.285.126.14-.034.237-.126.223-.223-.015-.092-.145-.155-.286-.14zM20.845 9C14.134 9 9 14.095 9 20.806c0 5.367 3.377 9.959 8.202 11.575.619.11.837-.271.837-.586 0-.3-.015-1.955-.015-2.97 0 0-3.387.725-4.098-1.443 0 0-.552-1.408-1.345-1.77 0 0-1.108-.76.077-.746 0 0 1.205.097 1.868 1.249 1.06 1.867 2.835 1.33 3.527 1.01.112-.773.426-1.31.774-1.63-2.704-.3-5.433-.692-5.433-5.347 0-1.33.367-1.998 1.141-2.85-.125-.314-.537-1.61.126-3.285C15.673 13.698 18 15.319 18 15.319a11.368 11.368 0 013.039-.41c1.03 0 2.07.14 3.038.41 0 0 2.328-1.625 3.34-1.306.662 1.679.25 2.97.125 3.285.774.857 1.248 1.525 1.248 2.85 0 4.67-2.85 5.042-5.555 5.347.446.382.823 1.108.823 2.245 0 1.631-.014 3.649-.014 4.045 0 .315.222.697.837.586C29.719 30.765 33 26.173 33 20.806 33 14.096 27.556 9 20.845 9zm-7.142 16.689c-.063.048-.048.16.034.251.078.078.189.112.252.049.063-.049.048-.16-.034-.252-.078-.077-.189-.111-.252-.048zm-.522-.392c-.034.063.014.14.11.188.078.049.175.034.209-.033.034-.063-.015-.14-.111-.19-.097-.028-.174-.014-.208.035zm1.567 1.722c-.077.063-.048.208.063.3.112.112.252.126.315.049.063-.063.034-.208-.063-.3-.107-.112-.252-.126-.315-.049zm-.551-.71c-.078.047-.078.173 0 .285.077.11.208.16.27.11.078-.062.078-.188 0-.3-.067-.11-.193-.159-.27-.096z'
          fill={color !== 'secondary' ? 'var(--light-blue)' : 'var(--white)'}
        />
      </g>
    </IconStyles>
  );
}
