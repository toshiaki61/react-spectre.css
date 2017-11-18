var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import React from 'react';
import classnames from 'classnames';

import Menu from './Menu';
import Icon from '../elements/Icon';
import uniqueId from '../elements/form/uniqueId';
import position from '../utilities/position';










var Item = function Item(_ref) {var contents = _ref.contents,className = _ref.className,exclusive = _ref.exclusive,useIcon = _ref.useIcon,header = _ref.header;
  var classes = classnames('accordion-item', className);
  var id = uniqueId('accordion-item');
  var type = exclusive ? 'radio' : 'checkbox';
  var inputProps = { id: id, type: type, name: 'accordion-' + type };
  var icon = useIcon ? React.createElement(Icon, { className: position({ marginRight: true }), arrowRight: true }) : null;
  return (
    React.createElement('div', { className: classes },
      React.createElement('input', _extends({}, inputProps, { hidden: true })),
      React.createElement('label', { className: 'accordion-header', htmlFor: id },
        icon,
        header),

      React.createElement('div', { className: 'accordion-body' },
        React.createElement(Menu, { nav: true, contents: contents }))));



};
Item.defaultProps = {
  className: '',
  exclusive: false,
  useIcon: false };








var Accordion = function Accordion(_ref2) {var menus = _ref2.menus,className = _ref2.className,exclusive = _ref2.exclusive,useIcon = _ref2.useIcon;
  var classes = classnames('accordion', className);
  return (
    React.createElement('div', { className: classes },
      menus.map(function (_ref3, i) {var header = _ref3.header,contents = _ref3.contents,menu = _objectWithoutProperties(_ref3, ['header', 'contents']);
        var key = 'accordion_' + i;
        return (
          React.createElement(Item, _extends({
            key: key,
            exclusive: exclusive,
            useIcon: useIcon,
            header: header,
            contents: contents },
          menu)));


      })));


};
Accordion.defaultProps = {
  className: '',
  exclusive: false,
  useIcon: false };


export default Accordion;