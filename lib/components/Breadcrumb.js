var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
import * as React from 'react';var bpfrpt_proptype_ItemProps = { link: PropTypes.string, content: PropTypes.string };





var Item = function Item(_ref) {var link = _ref.link,content = _ref.content;return (
    React.createElement('li', { className: 'breadcrumb-item' },
      React.createElement('a', { href: link }, content)));};Item.propTypes = bpfrpt_proptype_ItemProps;


Item.defaultProps = {
  link: '#',
  content: '' };var bpfrpt_proptype_BreadcrumbProps = { items: PropTypes.arrayOf(PropTypes.shape({ link: PropTypes.string, content: PropTypes.string }).isRequired).isRequired };





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


};Breadcrumb.propTypes = bpfrpt_proptype_BreadcrumbProps;

export default Breadcrumb;import PropTypes from 'prop-types';export { bpfrpt_proptype_ItemProps };export { bpfrpt_proptype_BreadcrumbProps };