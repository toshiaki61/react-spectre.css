var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
import React from 'react';
import classnames from 'classnames';
import noop from 'lodash.noop';

import Button from '../elements/Button';








var Item = function Item(_ref) {var id = _ref.id,name = _ref.name,items = _ref.items,active = _ref.active,onClick = _ref.onClick;return (
    React.createElement('li', { className: classnames('nav-item', { active: active }) },
      React.createElement(Button, {
          href: '#',
          onClick: function (_onClick) {function onClick(_x) {return _onClick.apply(this, arguments);}onClick.toString = function () {return _onClick.toString();};return onClick;}(function (e) {return onClick(e, id);}) },
        name),
      items && items.length ? React.createElement(Nav, { items: items, onClick: onClick }) : null));};


Item.defaultProps = {
  items: [],
  active: false,
  onClick: noop };







var Nav = function Nav(_ref2) {var items = _ref2.items,active = _ref2.active,onClick = _ref2.onClick;return (
    React.createElement('ul', { className: 'nav' },
      items.map(function (item) {return (
          React.createElement(Item, _extends({ key: item.id }, item, { active: active === item.id, onClick: onClick })));})));};



Nav.defaultProps = {
  items: [],
  active: '',
  onClick: noop };


export default Nav;