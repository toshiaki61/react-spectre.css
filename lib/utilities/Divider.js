
import React from 'react';
import classnames from 'classnames';








var Divider = function Divider(_ref) {var content = _ref.content,vertical = _ref.vertical,li = _ref.li,center = _ref.center,className = _ref.className;
  var classes = classnames({
    divider: !vertical,
    'divider-vert': vertical,
    'text-center': center },
  className);
  if (li) {
    return React.createElement('li', { className: classes, 'data-content': content });
  }
  return (
    React.createElement('div', { className: classes, 'data-content': content }));

};
Divider.defaultProps = {
  content: '',
  vertical: false,
  li: false,
  center: false,
  className: '' };


export default Divider;