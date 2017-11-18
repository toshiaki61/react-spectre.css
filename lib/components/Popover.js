
import React from 'react';
import classnames from 'classnames';








var Popover = function Popover(_ref) {var target = _ref.target,children = _ref.children,right = _ref.right,left = _ref.left,bottom = _ref.bottom;
  var classes = classnames('popover', {
    'popover-right': right,
    'popover-left': left,
    'popover-bottom': bottom });

  return (
    React.createElement('div', { className: classes },
      target,
      React.createElement('div', { className: 'popover-container' },
        children)));



};
Popover.defaultProps = {
  right: false,
  left: false,
  bottom: false };


export default Popover;