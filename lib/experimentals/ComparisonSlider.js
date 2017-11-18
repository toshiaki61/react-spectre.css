var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import React from 'react';
import classnames from 'classnames';






var Image = function Image(_ref) {var src = _ref.src,alt = _ref.alt,className = _ref.className,props = _objectWithoutProperties(_ref, ['src', 'alt', 'className']);return (
    React.createElement('img', _extends({ src: src, className: classnames('rounded', className), alt: alt }, props)));};

Image.defaultProps = {
  alt: '',
  className: '' };






var ComparisonSlider = function ComparisonSlider(_ref2) {var before = _ref2.before,after = _ref2.after;return (
    React.createElement('div', { className: 'comparison-slider' },
      React.createElement('figure', { className: 'comparison-before' },
        React.createElement(Image, before),
        React.createElement('div', { className: 'comparison-label' }, 'Before')),

      React.createElement('figure', { className: 'comparison-after' },
        React.createElement(Image, after),
        React.createElement('div', { className: 'comparison-label' }, 'After'),
        React.createElement('textarea', { className: 'comparison-resizer', readOnly: true }))));};




export default ComparisonSlider;