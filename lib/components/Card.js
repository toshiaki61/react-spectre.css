var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
import * as React from 'react';var babelPluginFlowReactPropTypes_proptype_ItemHeaderProps = { button: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM).isRequired : require('prop-types').any.isRequired, title: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM).isRequired : require('prop-types').any.isRequired, subtitle: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM).isRequired : require('prop-types').any.isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_ItemHeaderProps', { value: babelPluginFlowReactPropTypes_proptype_ItemHeaderProps, configurable: true, enumerable: true });var babelPluginFlowReactPropTypes_proptype_ItemProps = { type: require('prop-types').oneOf(['image', 'body', 'footer']), content: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_ItemProps', { value: babelPluginFlowReactPropTypes_proptype_ItemProps, configurable: true, enumerable: true });










var Item = function Item(_ref) {var type = _ref.type,content = _ref.content;
  switch (type) {
    case 'image':
      return (
        React.createElement('div', { className: 'card-image' },
          content));


    case 'body':
      return (
        React.createElement('div', { className: 'card-body' },
          content));


    case 'footer':
    default:
      return (
        React.createElement('div', { className: 'card-footer' },
          content));}



};Item.propTypes = babelPluginFlowReactPropTypes_proptype_ItemProps;
Item.defaultProps = {
  type: '',
  content: null };var babelPluginFlowReactPropTypes_proptype_CardProps = { items: require('prop-types').arrayOf(require('prop-types').shape({ type: require('prop-types').oneOf(['image', 'body', 'footer']), content: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any })).isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CardProps', { value: babelPluginFlowReactPropTypes_proptype_CardProps, configurable: true, enumerable: true });





var Card = function Card(_ref2) {var items = _ref2.items;return (
    React.createElement('div', { className: 'card' },
      items.map(function (item, i) {
        var key = 'card-' + i;
        if (item.type === 'header') {
          return (
            React.createElement('div', { key: key, className: 'card-header' },
              item.content.button,
              item.content.title ? React.createElement('div', { className: 'card-title h5' }, item.content.title) : null,
              item.content.subtitle ? React.createElement('div', { className: 'card-subtitle text-gray' }, item.content.subtitle) : null));


        }
        return (
          React.createElement(Item, _extends({ key: key }, item)));

      })));};Card.propTypes = babelPluginFlowReactPropTypes_proptype_CardProps;



export default Card;