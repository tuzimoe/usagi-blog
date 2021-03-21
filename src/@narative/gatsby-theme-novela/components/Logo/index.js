import React from 'react';
// import Logos from './amsf.svg';
/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */

export default function Logo({ fill }) {
    return (
  <svg height="30px" viewBox="0 0 106 28" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    <g id="画板" stroke="none" strokeWidth="1" fill={fill} fillRule="evenodd">
        <text id="Usagi-Ryuuuuu" fontFamily="Rockwell-BoldItalic, Rockwell" fill={fill} fontStyle="italic" fontWeight="bold" linespacing="0" fill="#FF00B8">
            <tspan x="27" y="12">Usagi</tspan>
            <tspan x="27" y="25">Ryuuuuuuuuu</tspan>
        </text>
    </g>
</svg>);
}