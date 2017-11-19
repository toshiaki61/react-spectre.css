var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
import * as React from 'react';var babelPluginFlowReactPropTypes_proptype_ItemProps = { link: require('prop-types').string, content: require('prop-types').string };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_ItemProps', { value: babelPluginFlowReactPropTypes_proptype_ItemProps, configurable: true, enumerable: true });





var Item = function Item(_ref) {var link = _ref.link,content = _ref.content;return (
    React.createElement('li', { className: 'breadcrumb-item' },
      React.createElement('a', { href: link }, content)));};Item.propTypes = babelPluginFlowReactPropTypes_proptype_ItemProps;


Item.defaultProps = {
  link: '#',
  content: '' };var babelPluginFlowReactPropTypes_proptype_BreadcrumbProps = { items: require('prop-types').arrayOf(require('prop-types').shape({ link: require('prop-types').string, content: require('prop-types').string })).isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_BreadcrumbProps', { value: babelPluginFlowReactPropTypes_proptype_BreadcrumbProps, configurable: true, enumerable: true });





var Breadcrumb = function Breadcrumb(_ref2) {var items = _ref2.items;
  if (items.length === 0) {
    return null;
  }
  return (
    React.createElement('ul', { className: 'breadcrumb' },
      items.map(function (item, i) {
        var key = 'breadcrumb-' + i;
        return React.createElement(Item, _extends({ key: key }, item));
      })));


};Breadcrumb.propTypes = babelPluginFlowReactPropTypes_proptype_BreadcrumbProps;

export default Breadcrumb;