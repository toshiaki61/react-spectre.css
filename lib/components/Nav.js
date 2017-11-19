var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
import * as React from 'react';
import classnames from 'classnames';
import noop from 'lodash.noop';

import Button from '../elements/Button';var babelPluginFlowReactPropTypes_proptype_ItemProps = { id: require('prop-types').string.isRequired, name: require('prop-types').string.isRequired, onClick: require('prop-types').func.isRequired, active: require('prop-types').bool, items: require('prop-types').arrayOf(typeof ItemProps === 'function' ? require('prop-types').instanceOf(ItemProps) : require('prop-types').any).isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_ItemProps', { value: babelPluginFlowReactPropTypes_proptype_ItemProps, configurable: true, enumerable: true });








var Item = function Item(_ref) {var id = _ref.id,name = _ref.name,items = _ref.items,active = _ref.active,onClick = _ref.onClick;return (
    React.createElement('li', { className: classnames('nav-item', { active: active }) },
      React.createElement(Button, {
          href: '#',
          onClick: function (_onClick) {function onClick(_x) {return _onClick.apply(this, arguments);}onClick.toString = function () {return _onClick.toString();};return onClick;}(function (e) {return onClick(e, id);}) },

        name),

      items && items.length ? React.createElement(Nav, { items: items, onClick: onClick }) : null));};Item.propTypes = babelPluginFlowReactPropTypes_proptype_ItemProps;


Item.defaultProps = {
  active: false };var babelPluginFlowReactPropTypes_proptype_NavProps = { items: require('prop-types').arrayOf(require('prop-types').shape({ id: require('prop-types').string.isRequired, name: require('prop-types').string.isRequired, onClick: require('prop-types').func.isRequired, active: require('prop-types').bool, items: require('prop-types').arrayOf(typeof ItemProps === 'function' ? require('prop-types').instanceOf(ItemProps) : require('prop-types').any).isRequired })).isRequired, active: require('prop-types').string, onClick: require('prop-types').func };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_NavProps', { value: babelPluginFlowReactPropTypes_proptype_NavProps, configurable: true, enumerable: true });







var Nav = function Nav(_ref2) {var items = _ref2.items,active = _ref2.active,onClick = _ref2.onClick;return (
    React.createElement('ul', { className: 'nav' },
      items.map(function (item) {return (
          React.createElement(Item, _extends({ key: item.id }, item, { active: active === item.id, onClick: onClick })));})));};Nav.propTypes = babelPluginFlowReactPropTypes_proptype_NavProps;



Nav.defaultProps = {
  active: '',
  onClick: noop };


export default Nav;