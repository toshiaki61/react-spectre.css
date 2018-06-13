var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';

import Icon from '../elements/Icon';var bpfrpt_proptype_SidebarProps = { className: PropTypes.string, content: PropTypes.oneOfType([PropTypes.arrayOf(function () {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}), function () {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}, PropTypes.string]).isRequired };var bpfrpt_proptype_OffCanvasProps = { children: PropTypes.oneOfType([PropTypes.arrayOf(function () {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}), function () {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}]).isRequired, sidebar: PropTypes.shape({ className: PropTypes.string, content: PropTypes.oneOfType([PropTypes.arrayOf(function () {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}), function () {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}, PropTypes.string]).isRequired }).isRequired };










var OffCanvas = function OffCanvas(_ref) {var
  children = _ref.children,
  sidebar = _ref.sidebar,
  props = _objectWithoutProperties(_ref, ['children', 'sidebar']);return (

    React.createElement('div', _extends({ className: 'off-canvas off-canvas-sidebar-show' }, props),
      React.createElement('a', {
          className: 'off-canvas-toggle btn btn-primary btn-action',
          href: '#sidebar-id' },

        React.createElement(Icon, { menu: true })),

      React.createElement('div', {
          id: 'sidebar-id',
          className: classnames('off-canvas-sidebar', sidebar.className || '') },

        sidebar.content),

      React.createElement('a', { className: 'off-canvas-overlay', href: '#close' }, 'close'),


      React.createElement('div', { className: 'off-canvas-content' }, children)));};OffCanvas.propTypes = bpfrpt_proptype_OffCanvasProps;



export default OffCanvas;import PropTypes from 'prop-types';export { bpfrpt_proptype_SidebarProps };export { bpfrpt_proptype_OffCanvasProps };