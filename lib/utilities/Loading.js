
import * as React from 'react';
import classnames from 'classnames';var babelPluginFlowReactPropTypes_proptype_LoadingProps = { large: require('prop-types').bool, className: require('prop-types').string };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_LoadingProps', { value: babelPluginFlowReactPropTypes_proptype_LoadingProps, configurable: true, enumerable: true });





var Loading = function Loading(_ref) {var large = _ref.large,className = _ref.className;
  var classes = classnames('loading', {
    'loading-lg': large },
  className);
  return (
    React.createElement('div', { className: classes }));

};Loading.propTypes = babelPluginFlowReactPropTypes_proptype_LoadingProps;
Loading.defaultProps = {
  large: false,
  className: '' };


export default Loading;