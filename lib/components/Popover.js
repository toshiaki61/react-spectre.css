
import * as React from 'react';
import classnames from 'classnames';var bpfrpt_proptype_PopoverProps = { target: function target() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}, children: function children() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}, right: PropTypes.bool, left: PropTypes.bool, bottom: PropTypes.bool, className: PropTypes.string };









var Popover = function Popover(_ref)






{var target = _ref.target,children = _ref.children,right = _ref.right,left = _ref.left,bottom = _ref.bottom,className = _ref.className;
  var classes = classnames('popover', className, {
    'popover-right': right,
    'popover-left': left,
    'popover-bottom': bottom });

  return (
    React.createElement('div', { className: classes },
      target,
      React.createElement('div', { className: 'popover-container' }, children)));


};Popover.propTypes = bpfrpt_proptype_PopoverProps;
Popover.defaultProps = {
  right: false,
  left: false,
  bottom: false,
  className: '' };


export default Popover;import PropTypes from 'prop-types';export { bpfrpt_proptype_PopoverProps };