import React from 'react';

const BlinkStar = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M8 2.5C8 5 5 8 2.5 8C5 8 8 11 8 13.5C8 11 11 8 13.5 8C11 8 8 5 8 2.5Z" stroke="hsl(var(--foreground))"
            stroke-linejoin="round"></path>
      <path
        d="M17.75 9C17.75 10.7045 15.7045 12.75 14 12.75C15.7045 12.75 17.75 14.7955 17.75 16.5C17.75 14.7955 19.7955 12.75 21.5 12.75C19.7955 12.75 17.75 10.7045 17.75 9Z"
        stroke="hsl(var(--foreground))" stroke-linejoin="round"></path>
      <path
        d="M9.5 15.5C9.5 16.8636 7.86364 18.5 6.5 18.5C7.86364 18.5 9.5 20.1364 9.5 21.5C9.5 20.1364 11.1364 18.5 12.5 18.5C11.1364 18.5 9.5 16.8636 9.5 15.5Z"
        stroke="hsl(var(--foreground))" stroke-linejoin="round"></path>
    </svg>
  );
};

export default BlinkStar;