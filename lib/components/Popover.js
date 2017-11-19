
import * as React from 'react';
import classnames from 'classnames';var babelPluginFlowReactPropTypes_proptype_PopoverProps = { target: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM).isRequired : require('prop-types').any.isRequired, children: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM).isRequired : require('prop-types').any.isRequired, right: require('prop-types').bool, left: require('prop-types').bool, bottom: require('prop-types').bool };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_PopoverProps', { value: babelPluginFlowReactPropTypes_proptype_PopoverProps, configurable: true, enumerable: true });








var Popover = function Popover(_ref)





{var target = _ref.target,children = _ref.children,right = _ref.right,left = _ref.left,bottom = _ref.bottom;
  var classes = classnames('popover', {
    'popover-right': right,
    'popover-left': left,
    'popover-bottom': bottom });

  return (
    React.createElement('div', { className: classes },
      target,
      React.createElement('div', { className: 'popover-container' },
        children)));



};Popover.propTypes = babelPluginFlowReactPropTypes_proptype_PopoverProps;
Popover.defaultProps = {
  right: false,
  left: false,
  bottom: false };


export default Popover;