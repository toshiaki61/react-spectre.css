var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import React from 'react';
import classnames from 'classnames';

import Icon from '../elements/Icon';









var OffCanvas = function OffCanvas(_ref) {var children = _ref.children,sidebar = _ref.sidebar,props = _objectWithoutProperties(_ref, ['children', 'sidebar']);return (
    React.createElement('div', _extends({ className: 'off-canvas' }, props),
      React.createElement('input', { type: 'checkbox', className: 'off-canvas-checkbox', id: 'sidebar-checkbox', name: 'sidebar-checkbox', hidden: true }),
      React.createElement('label', { className: 'off-canvas-toggle btn btn-primary btn-lg', htmlFor: 'sidebar-checkbox' },
        React.createElement(Icon, { menu: true })),


      React.createElement('div', { className: classnames('off-canvas-sidebar', sidebar.className || '') },
        sidebar.content),

      React.createElement('div', { className: 'off-canvas-content' },
        children)));};




export default OffCanvas;