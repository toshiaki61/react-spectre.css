var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';

import Container from './Container';
import { acquireContainerProps } from './Columns';var bpfrpt_proptype_SectionProps = { children: function children() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}, className: PropTypes.string, center: PropTypes.bool };






var Section = function Section(_ref)




{var children = _ref.children,className = _ref.className,center = _ref.center,props = _objectWithoutProperties(_ref, ['children', 'className', 'center']);
  var classes = classnames(
  {
    'navbar-section': !center,
    'navbar-center': center },

  className);

  return (
    React.createElement('section', _extends({ className: classes }, props),
      children));


};Section.propTypes = bpfrpt_proptype_SectionProps;
Section.defaultProps = {
  className: '',
  center: false };var bpfrpt_proptype_NavbarWithoutContainerProps = { children: function children() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}, className: PropTypes.string };






var NavbarWithoutContainer = function NavbarWithoutContainer(_ref2)



{var children = _ref2.children,className = _ref2.className,props = _objectWithoutProperties(_ref2, ['children', 'className']);
  var classes = classnames('navbar', className);

  return (
    React.createElement('header', _extends({ className: classes }, props),
      children));


};NavbarWithoutContainer.propTypes = bpfrpt_proptype_NavbarWithoutContainerProps;
NavbarWithoutContainer.defaultProps = {
  className: '' };var bpfrpt_proptype_NavbarProps = { children: function children() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}, container: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.shape({ className: PropTypes.string, xs: PropTypes.bool, sm: PropTypes.bool, md: PropTypes.bool, lg: PropTypes.bool, xl: PropTypes.bool })]) };
















var Navbar = function Navbar(_ref3)



{var children = _ref3.children,container = _ref3.container,props = _objectWithoutProperties(_ref3, ['children', 'container']);
  var content =
  React.createElement(NavbarWithoutContainer, props, children);


  if (!container) {
    return content;
  }
  var containerProps = acquireContainerProps(container);

  return React.createElement(Container, containerProps, content);
};Navbar.propTypes = bpfrpt_proptype_NavbarProps;
Navbar.defaultProps = {
  container: false };var bpfrpt_proptype_BrandProps = { children: function children() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}, className: PropTypes.string, href: PropTypes.string };







var Brand = function Brand(_ref4)



{var children = _ref4.children,className = _ref4.className,props = _objectWithoutProperties(_ref4, ['children', 'className']);
  var classes = classnames('navbar-brand', className);
  var component = null;
  if (props.href) {
    component =
    React.createElement('a', _extends({ className: classes }, props),
      children);


  } else {
    component =
    React.createElement('span', _extends({ className: classes }, props),
      children);


  }
  return component;
};Brand.propTypes = bpfrpt_proptype_BrandProps;
Brand.defaultProps = {
  className: '',
  href: '' };


Navbar.Brand = Brand;
Navbar.Section = Section;

export default Navbar;import PropTypes from 'prop-types';export { bpfrpt_proptype_SectionProps };export { bpfrpt_proptype_NavbarWithoutContainerProps };export { bpfrpt_proptype_NavbarProps };export { bpfrpt_proptype_BrandProps };