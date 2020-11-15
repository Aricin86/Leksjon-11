import React from 'react';

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    height="40"
    width="40"
    aria-labelledby="title"
  >
    <title id="title">Logo</title>
    <circle fill="#fff" cx="20" cy="20" r="19"/>
    <path fill="#707070" d="M20,2A18,18,0,1,1,2,20,18,18,0,0,1,20,2m0-2A20,20,0,1,0,40,20,20,20,0,0,0,20,0Z"/>
    <text fill="#707070" fontSize="22px" fontFamily="Roboto-Regular, Roboto" transform="translate(4.04 28.43)">
      <tspan letterSpacing="-0.01em">J</tspan>
      <tspan x="11.9" y="0">A!</tspan>
    </text>
  </svg>
);

export default Logo;
