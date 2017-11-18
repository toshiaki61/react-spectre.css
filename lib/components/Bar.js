var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import React from 'react';
import classnames from 'classnames';

import Button from '../elements/Button';






var Item = function Item(_ref) {var small = _ref.small,tooltip = _ref.tooltip,content = _ref.content,props = _objectWithoutProperties(_ref, ['small', 'tooltip', 'content']);
  var classes = classnames('bar-item', { tooltip: tooltip });
  return (
    React.createElement('div', _extends({
        className: classes,
        'data-tooltip': tooltip },
      props),
      small ? null : content));

};
Item.defaultProps = {
  small: false,
  tooltip: '',
  content: '' };














var Bar = function Bar(_ref2) {var className = _ref2.className,small = _ref2.small,slider = _ref2.slider,items = _ref2.items;
  var classes = classnames('bar', {
    'bar-sm': small,
    'bar-slider': slider },
  className);
  return (
    React.createElement('div', { className: classes },
      items.map(function (item, i) {
        var key = 'bar-item-' + i;
        if (slider) {
          var _value = item.value + '%';
          Object.assign(item, {
            role: 'progressbar',
            style: { width: _value },
            content: React.createElement(Button, { className: 'bar-slider-btn tooltip', 'data-tooltip': _value }) });

        }
        return (
          React.createElement(Item, _extends({ key: key, small: small }, item)));

      })));


};
Bar.defaultProps = {
  className: '',
  small: false,
  slider: false,
  items: [] };


export default Bar;