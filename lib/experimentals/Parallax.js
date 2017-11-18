
import React from 'react';






var Parallax = function Parallax(_ref) {var src = _ref.src,alt = _ref.alt,title = _ref.title;return (
    React.createElement("div", { className: "parallax" },
      React.createElement("div", { className: "parallax-top-left" }),
      React.createElement("div", { className: "parallax-top-right" }),
      React.createElement("div", { className: "parallax-bottom-left" }),
      React.createElement("div", { className: "parallax-bottom-right" }),
      React.createElement("div", { className: "parallax-content" },
        React.createElement("div", { className: "parallax-front" },
          React.createElement("h2", null, title)),

        React.createElement("div", { className: "parallax-back" },
          React.createElement("img", { src: src, className: "img-responsive rounded", alt: alt })))));};




Parallax.defaultProps = {
  src: 'https://picturepan2.github.io/spectre/img/osx-yosemite-2.jpg',
  alt: 'macOS Yosemite Wallpaper',
  title: 'tvOS parallax demo' };


export default Parallax;