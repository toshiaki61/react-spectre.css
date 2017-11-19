
import * as React from 'react';var babelPluginFlowReactPropTypes_proptype_ParallaxProps = { src: require("prop-types").string.isRequired, alt: require("prop-types").string.isRequired, title: require("prop-types").string.isRequired };if (typeof exports !== "undefined") Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_ParallaxProps", { value: babelPluginFlowReactPropTypes_proptype_ParallaxProps, configurable: true, enumerable: true });






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
          React.createElement("img", { src: src, className: "img-responsive rounded", alt: alt })))));};Parallax.propTypes = babelPluginFlowReactPropTypes_proptype_ParallaxProps;




Parallax.defaultProps = {};

export default Parallax;