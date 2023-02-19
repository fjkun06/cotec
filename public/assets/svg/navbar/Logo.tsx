import React from "react";

const Logo = () => {
  return (
    <span className="navbar--logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" lang="en" >
        <title>SVG Paths</title>
        <defs>
          <g id="iconsright">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="4px"
              d="M 60,42.5
      A 10,10 0 1 1 50,68.5"
              transform="translate(-5.25,0)"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="4px"
              d="M 50,35
      A 20,20 0 1 1 50,75"
            />
          </g>
          <g id="iconsleft">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="4px"
              d="M 50,35
      A 20,20 0 1 0 50,75 "
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="4px"
              d="M 60,42.5
      A 10,10 0 1 0 50,68.5"
              transform="translate(-4,0)"
            />
          </g>

          <g id="wholeicon">
            <use href="#iconsleft" color="#00308F" />
            <use href="#iconsright" color="#daa520" transform="translate(0,-6.5)" />
            <rect width="35" height="15" x="45" y="45"></rect>
            <text fill="#00308F" x="45" y="58.5" fontSize="18" fontWeight="bold">
              CT<tspan fill="#daa520">H</tspan>
            </text>
          </g>
        </defs>
        <use href="#wholeicon" color="white" transform="translate(-25,0)" />
      </svg>
    </span>
  );
};

export default Logo;
