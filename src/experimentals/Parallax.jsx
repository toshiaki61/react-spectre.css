/* @flow */
import React from 'react';

export type ParallaxProps = {
  src: string,
  alt: string,
  title: string,
};
const Parallax = ({ src, alt, title }: ParallaxProps) => (
  <div className="parallax">
    <div className="parallax-top-left" />
    <div className="parallax-top-right" />
    <div className="parallax-bottom-left" />
    <div className="parallax-bottom-right" />
    <div className="parallax-content">
      <div className="parallax-front">
        <h2>{title}</h2>
      </div>
      <div className="parallax-back">
        <img src={src} className="img-responsive rounded" alt={alt} />
      </div>
    </div>
  </div>
);
Parallax.defaultProps = {
  src: 'https://picturepan2.github.io/spectre/img/osx-yosemite-2.jpg',
  alt: 'macOS Yosemite Wallpaper',
  title: 'tvOS parallax demo',
};

export default Parallax;
