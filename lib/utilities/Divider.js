
import * as React from 'react';
import classnames from 'classnames';var bpfrpt_proptype_DividerProps = { children: PropTypes.node, content: PropTypes.string.isRequired, vertical: PropTypes.bool, li: PropTypes.bool, center: PropTypes.bool, className: PropTypes.string };










var Divider = function Divider(_ref)






{var children = _ref.children,content = _ref.content,vertical = _ref.vertical,li = _ref.li,center = _ref.center,className = _ref.className;
  var classes = classnames(
  {
    divider: !vertical,
    'divider-vert': vertical,
    'text-center': center },

  className);

  if (li) {
    return (
      React.createElement('li', { className: classes, 'data-content': content },
        children));


  }
  return (
    React.createElement('div', { className: classes, 'data-content': content },
      children));


};Divider.propTypes = bpfrpt_proptype_DividerProps;
Divider.defaultProps = {
  children: null,
  vertical: false,
  li: false,
  center: false,
  className: '' };


export default Divider;import PropTypes from 'prop-types';export { bpfrpt_proptype_DividerProps };