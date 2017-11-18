
import React from 'react';
import classnames from 'classnames';





var Loading = function Loading(_ref) {var large = _ref.large,className = _ref.className;
  var classes = classnames('loading', {
    'loading-lg': large },
  className);
  return (
    React.createElement('div', { className: classes }));

};
Loading.defaultProps = {
  large: false,
  className: '' };


export default Loading;