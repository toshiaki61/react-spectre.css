var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';

import Menu from './Menu';
import Icon from '../elements/Icon';
import uniqueId from '../elements/form/uniqueId';
import position from '../utilities/position';var babelPluginFlowReactPropTypes_proptype_ItemProps = require('./Menu').babelPluginFlowReactPropTypes_proptype_ItemProps || require('prop-types').any;var babelPluginFlowReactPropTypes_proptype_ItemProps = { contents: require('prop-types').arrayOf(typeof MenuItemProps === 'function' ? require('prop-types').instanceOf(MenuItemProps) : require('prop-types').any).isRequired, className: require('prop-types').string, exclusive: require('prop-types').bool, useIcon: require('prop-types').bool, header: require('prop-types').oneOfType([typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any, require('prop-types').string]).isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_ItemProps', { value: babelPluginFlowReactPropTypes_proptype_ItemProps, configurable: true, enumerable: true });










var Item = function Item(_ref) {var contents = _ref.contents,className = _ref.className,exclusive = _ref.exclusive,useIcon = _ref.useIcon,header = _ref.header;
  var classes = classnames('accordion-item', className);
  var id = uniqueId('accordion-item');
  var type = exclusive ? 'radio' : 'checkbox';
  var inputProps = { id: id, type: type, name: 'accordion-' + type };
  var icon = useIcon ? React.createElement(Icon, { className: position({ marginRight: true }), arrowRight: true }) : null;
  return (
    React.createElement('div', { className: classes },
      React.createElement('input', _extends({}, inputProps, { id: id })),
      React.createElement('label', { className: 'accordion-header', htmlFor: id },
        icon,
        header),

      React.createElement('div', { className: 'accordion-body' },
        React.createElement(Menu, { nav: true, contents: contents, onClick: function onClick() {} }))));



};Item.propTypes = babelPluginFlowReactPropTypes_proptype_ItemProps;
Item.defaultProps = {
  className: '',
  exclusive: false,
  useIcon: false };var babelPluginFlowReactPropTypes_proptype_AccordionProps = { menus: require('prop-types').arrayOf(require('prop-types').shape({ contents: require('prop-types').arrayOf(typeof MenuItemProps === 'function' ? require('prop-types').instanceOf(MenuItemProps) : require('prop-types').any).isRequired, className: require('prop-types').string, exclusive: require('prop-types').bool, useIcon: require('prop-types').bool, header: require('prop-types').oneOfType([typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any, require('prop-types').string]).isRequired })).isRequired, className: require('prop-types').string, exclusive: require('prop-types').bool, useIcon: require('prop-types').bool };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_AccordionProps', { value: babelPluginFlowReactPropTypes_proptype_AccordionProps, configurable: true, enumerable: true });








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


};Accordion.propTypes = babelPluginFlowReactPropTypes_proptype_AccordionProps;
Accordion.defaultProps = {
  className: '',
  exclusive: false,
  useIcon: false };


export default Accordion;