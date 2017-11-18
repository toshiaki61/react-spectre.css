var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import React from 'react';
import classnames from 'classnames';

import Container from './Container';
import { acquireContainerProps } from './Columns';






var Section = function Section(_ref) {var children = _ref.children,className = _ref.className,center = _ref.center,props = _objectWithoutProperties(_ref, ['children', 'className', 'center']);
  var classes = classnames({
    'navbar-section': !center,
    'navbar-center': center },
  className);
  return (
    React.createElement('section', _extends({ className: classes }, props),
      children));


};
Section.defaultProps = {
  className: '',
  center: false };






var NavbarWithoutContainer = function NavbarWithoutContainer(_ref2) {var children = _ref2.children,className = _ref2.className,props = _objectWithoutProperties(_ref2, ['children', 'className']);
  var classes = classnames('navbar', className);

  return (
    React.createElement('header', _extends({ className: classes }, props),
      children));


};
NavbarWithoutContainer.defaultProps = {
  className: '' };
















var Navbar = function Navbar(_ref3) {var children = _ref3.children,container = _ref3.container,props = _objectWithoutProperties(_ref3, ['children', 'container']);
  var content = React.createElement(NavbarWithoutContainer, props, children);

  if (!container) {
    return content;
  }
  var containerProps = acquireContainerProps(container);

  return (
    React.createElement(Container, containerProps,
      content));


};
Navbar.defaultProps = {
  container: false };







var Brand = function Brand(_ref4) {var children = _ref4.children,className = _ref4.className,props = _objectWithoutProperties(_ref4, ['children', 'className']);
  var classes = classnames('navbar-brand', className);
  var component = null;
  if (props.href) {
    component = React.createElement('a', _extends({ className: classes }, props), children);
  } else {
    component = React.createElement('span', _extends({ className: classes }, props), children);
  }
  return component;
};
Brand.defaultProps = {
  className: '',
  href: '' };


Navbar.Brand = Brand;
Navbar.Section = Section;

export default Navbar;