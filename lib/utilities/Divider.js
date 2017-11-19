
import * as React from 'react';
import classnames from 'classnames';var babelPluginFlowReactPropTypes_proptype_DividerProps = { children: require('prop-types').node, content: require('prop-types').string.isRequired, vertical: require('prop-types').bool, li: require('prop-types').bool, center: require('prop-types').bool, className: require('prop-types').string };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_DividerProps', { value: babelPluginFlowReactPropTypes_proptype_DividerProps, configurable: true, enumerable: true });









var Divider = function Divider(_ref)






{var children = _ref.children,content = _ref.content,vertical = _ref.vertical,li = _ref.li,center = _ref.center,className = _ref.className;
  var classes = classnames({
    divider: !vertical,
    'divider-vert': vertical,
    'text-center': center },
  className);
  if (li) {
    return React.createElement('li', { className: classes, 'data-content': content }, children);
  }
  return (
    React.createElement('div', { className: classes, 'data-content': content }, children));

};Divider.propTypes = babelPluginFlowReactPropTypes_proptype_DividerProps;
Divider.defaultProps = {
  children: null,
  vertical: false,
  li: false,
  center: false,
  className: '' };


export default Divider;