var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';var babelPluginFlowReactPropTypes_proptype_ImageProps = { src: require('prop-types').string.isRequired, alt: require('prop-types').string, className: require('prop-types').string };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_ImageProps', { value: babelPluginFlowReactPropTypes_proptype_ImageProps, configurable: true, enumerable: true });






var Image = function Image(_ref) {var
  src = _ref.src,alt = _ref.alt,className = _ref.className,props = _objectWithoutProperties(_ref, ['src', 'alt', 'className']);return (

    React.createElement('img', _extends({ src: src, className: classnames('rounded', className), alt: alt }, props)));};Image.propTypes = babelPluginFlowReactPropTypes_proptype_ImageProps;

Image.defaultProps = {
  alt: '',
  className: '' };var babelPluginFlowReactPropTypes_proptype_ComparisonSliderProps = { before: require('prop-types').shape({ src: require('prop-types').string.isRequired, alt: require('prop-types').string, className: require('prop-types').string }).isRequired, after: require('prop-types').shape({ src: require('prop-types').string.isRequired, alt: require('prop-types').string, className: require('prop-types').string }).isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_ComparisonSliderProps', { value: babelPluginFlowReactPropTypes_proptype_ComparisonSliderProps, configurable: true, enumerable: true });






var ComparisonSlider = function ComparisonSlider(_ref2) {var before = _ref2.before,after = _ref2.after;return (
    React.createElement('div', { className: 'comparison-slider' },
      React.createElement('figure', { className: 'comparison-before' },
        React.createElement(Image, before),
        React.createElement('div', { className: 'comparison-label' }, 'Before')),

      React.createElement('figure', { className: 'comparison-after' },
        React.createElement(Image, after),
        React.createElement('div', { className: 'comparison-label' }, 'After'),
        React.createElement('textarea', { className: 'comparison-resizer', readOnly: true }))));};ComparisonSlider.propTypes = babelPluginFlowReactPropTypes_proptype_ComparisonSliderProps;




export default ComparisonSlider;