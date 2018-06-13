var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
import * as React from 'react';
import classnames from 'classnames';
import noop from 'lodash.noop';

import Button from '../elements/Button';var bpfrpt_proptype_ItemProps = { id: PropTypes.string.isRequired, name: PropTypes.string.isRequired, onClick: PropTypes.func, active: PropTypes.bool, items: PropTypes.arrayOf(function () {return (typeof ItemProps === 'function' ? PropTypes.instanceOf(ItemProps).isRequired : PropTypes.any.isRequired).apply(this, arguments);}) };








var Item = function Item(_ref) {var
  id = _ref.id,
  name = _ref.name,
  items = _ref.items,
  active = _ref.active,
  onClick = _ref.onClick;return (

    React.createElement('li', { className: classnames('nav-item', { active: active }) },
      React.createElement(Button, { href: '#', onClick: function (_onClick) {function onClick(_x) {return _onClick.apply(this, arguments);}onClick.toString = function () {return _onClick.toString();};return onClick;}(function (e) {return onClick(e, id);}) },
        name),

      items && items.length ? React.createElement(Nav, { items: items, onClick: onClick }) : null));};Item.propTypes = bpfrpt_proptype_ItemProps;


Item.defaultProps = {
  active: false };var bpfrpt_proptype_NavProps = { items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, name: PropTypes.string.isRequired, onClick: PropTypes.func, active: PropTypes.bool, items: PropTypes.arrayOf(function () {return (typeof ItemProps === 'function' ? PropTypes.instanceOf(ItemProps).isRequired : PropTypes.any.isRequired).apply(this, arguments);}) }).isRequired).isRequired, active: PropTypes.string, onClick: PropTypes.func.isRequired };







var Nav = function Nav(_ref2) {var items = _ref2.items,active = _ref2.active,onClick = _ref2.onClick;return (
    React.createElement('ul', { className: 'nav' },
      items.map(function (item) {return (
          React.createElement(Item, _extends({
            key: item.id },
          item, {
            active: active === item.id,
            onClick: onClick })));})));};Nav.propTypes = bpfrpt_proptype_NavProps;




Nav.defaultProps = {
  active: '',
  onClick: noop };


export default Nav;import PropTypes from 'prop-types';export { bpfrpt_proptype_ItemProps };export { bpfrpt_proptype_NavProps };