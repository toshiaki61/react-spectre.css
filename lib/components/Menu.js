var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';

import Divider from '../utilities/Divider';var bpfrpt_proptype_BadgeProps = { content: PropTypes.oneOfType([PropTypes.string, PropTypes.number, function () {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}]) };




var Badge = function Badge(_ref) {var content = _ref.content;
  if (!content) {
    return null;
  }

  return (
    React.createElement('div', { className: 'menu-badge' },
      React.createElement('span', { className: 'label label-primary' }, content)));


};Badge.propTypes = bpfrpt_proptype_BadgeProps;
Badge.defaultProps = {
  content: '' };var bpfrpt_proptype_ItemProps = { id: PropTypes.string, link: PropTypes.string, content: PropTypes.string, className: PropTypes.string, divider: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]), active: PropTypes.bool, badge: PropTypes.number, onClick: PropTypes.func };












var Item = function Item(_ref2)









{var id = _ref2.id,link = _ref2.link,content = _ref2.content,className = _ref2.className,divider = _ref2.divider,active = _ref2.active,badge = _ref2.badge,onClick = _ref2.onClick,props = _objectWithoutProperties(_ref2, ['id', 'link', 'content', 'className', 'divider', 'active', 'badge', 'onClick']);
  var classes = classnames('menu-item', className);
  if (divider) {
    return (
      React.createElement(Divider, {
        className: className,
        content: typeof divider === 'string' ? divider : '' }));


  }
  return (
    React.createElement('li', _extends({ className: classes }, props),
      React.createElement(Badge, { content: badge }),
      React.createElement('a', {
          href: link,
          className: classnames({ active: active }),
          onClick: function (_onClick) {function onClick(_x) {return _onClick.apply(this, arguments);}onClick.toString = function () {return _onClick.toString();};return onClick;}(function (e) {return onClick(e, id);}) },

        content)));



};Item.propTypes = bpfrpt_proptype_ItemProps;
Item.defaultProps = {
  link: '',
  content: '',
  className: '',
  divider: false,
  active: false,
  badge: 0 };var bpfrpt_proptype_MenuProps = { className: PropTypes.string, nav: PropTypes.bool, contents: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, link: PropTypes.string, content: PropTypes.string, className: PropTypes.string, divider: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]), active: PropTypes.bool, badge: PropTypes.number, onClick: PropTypes.func }).isRequired).isRequired, onClick: PropTypes.func.isRequired };








var Menu = function Menu(_ref3)





{var className = _ref3.className,nav = _ref3.nav,contents = _ref3.contents,onClick = _ref3.onClick,props = _objectWithoutProperties(_ref3, ['className', 'nav', 'contents', 'onClick']);
  var classes = classnames(
  'menu',
  {
    'menu-nav': nav },

  className);

  var ulProps = Object.keys(props).
  filter(function (p) {return p !== 'header';}).
  reduce(function (memo, p) {return Object.assign(memo, _defineProperty({}, p, props[p]));}, {});
  return (
    React.createElement('ul', _extends({ className: classes }, ulProps),
      contents.map(function (content, i) {
        var key = content.id || 'menu-item_' + i;
        return (
          React.createElement(Item, _extends({ key: key }, content, { onClick: content.onClick || onClick })));

      })));


};Menu.propTypes = bpfrpt_proptype_MenuProps;
Menu.defaultProps = {
  className: '',
  nav: false };


export default Menu;import PropTypes from 'prop-types';export { bpfrpt_proptype_BadgeProps };export { bpfrpt_proptype_ItemProps };export { bpfrpt_proptype_MenuProps };