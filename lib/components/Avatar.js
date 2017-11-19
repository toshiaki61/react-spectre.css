var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';var babelPluginFlowReactPropTypes_proptype_IconProp = { src: require('prop-types').string.isRequired, alt: require('prop-types').string, className: require('prop-types').string };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_IconProp', { value: babelPluginFlowReactPropTypes_proptype_IconProp, configurable: true, enumerable: true });






var Icon = function Icon(_ref) {var className = _ref.className,alt = _ref.alt,props = _objectWithoutProperties(_ref, ['className', 'alt']);
  var classes = classnames('avatar-icon', className);
  return (
    React.createElement('img', _extends({ className: classes, alt: alt }, props)));

};Icon.propTypes = babelPluginFlowReactPropTypes_proptype_IconProp;
Icon.defaultProps = {
  alt: '',
  className: '' };var babelPluginFlowReactPropTypes_proptype_PresenceProp = { presence: require('prop-types').string.isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_PresenceProp', { value: babelPluginFlowReactPropTypes_proptype_PresenceProp, configurable: true, enumerable: true });





var Presence = function Presence(_ref2) {var presence = _ref2.presence;return (
    React.createElement('i', { className: classnames('avatar-presence', presence) }));};Presence.propTypes = babelPluginFlowReactPropTypes_proptype_PresenceProp;var babelPluginFlowReactPropTypes_proptype_AvatarProps = { className: require('prop-types').string, xl: require('prop-types').bool, lg: require('prop-types').bool, sm: require('prop-types').bool, xs: require('prop-types').bool, initial: require('prop-types').string, img: require('prop-types').string, icon: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any, alt: require('prop-types').string, presence: require('prop-types').oneOf(['', 'online', 'offline', 'away', 'busy']) };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_AvatarProps', { value: babelPluginFlowReactPropTypes_proptype_AvatarProps, configurable: true, enumerable: true });














var Avatar = function Avatar(_ref3)











{var className = _ref3.className,xl = _ref3.xl,lg = _ref3.lg,sm = _ref3.sm,xs = _ref3.xs,initial = _ref3.initial,img = _ref3.img,icon = _ref3.icon,alt = _ref3.alt,presence = _ref3.presence,props = _objectWithoutProperties(_ref3, ['className', 'xl', 'lg', 'sm', 'xs', 'initial', 'img', 'icon', 'alt', 'presence']);
  var classes = classnames(
  'avatar',
  {
    'avatar-xl': xl,
    'avatar-lg': lg,
    'avatar-sm': sm,
    'avatar-xs': xs },

  className);

  return (
    React.createElement('figure', _extends({ className: classes, 'data-initial': initial }, props),
      img ? React.createElement('img', { src: img, alt: alt }) : null,
      icon ? React.createElement(Avatar, { className: 'avatar-icon', initial: icon.initial, src: icon.src, alt: icon.alt }) : null,
      presence ? React.createElement(Presence, { presence: presence }) : null));


};Avatar.propTypes = babelPluginFlowReactPropTypes_proptype_AvatarProps;
Avatar.defaultProps = {
  className: '',
  xl: false,
  lg: false,
  sm: false,
  xs: false,
  initial: '',
  img: '',
  icon: undefined,
  alt: '',
  presence: '' };


export default Avatar;