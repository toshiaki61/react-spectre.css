
import * as React from 'react';var bpfrpt_proptype_ParallaxProps = { src: PropTypes.string.isRequired, alt: PropTypes.string.isRequired, title: PropTypes.string.isRequired };






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
          React.createElement("img", { src: src, className: "img-responsive rounded", alt: alt })))));};Parallax.propTypes = bpfrpt_proptype_ParallaxProps;




Parallax.defaultProps = {};

export default Parallax;import PropTypes from "prop-types";export { bpfrpt_proptype_ParallaxProps };