
import * as React from 'react';
import classnames from 'classnames';var bpfrpt_proptype_LoadingProps = { large: PropTypes.bool, className: PropTypes.string };





var Loading = function Loading(_ref) {var large = _ref.large,className = _ref.className;
  var classes = classnames(
  'loading',
  {
    'loading-lg': large },

  className);

  return React.createElement('div', { className: classes });
};Loading.propTypes = bpfrpt_proptype_LoadingProps;
Loading.defaultProps = {
  large: false,
  className: '' };


export default Loading;import PropTypes from 'prop-types';export { bpfrpt_proptype_LoadingProps };