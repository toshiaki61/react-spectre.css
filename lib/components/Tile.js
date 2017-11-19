
import * as React from 'react';
import classnames from 'classnames';var babelPluginFlowReactPropTypes_proptype_TileProps = { compact: require('prop-types').bool, title: require('prop-types').string, subtitle: require('prop-types').string, content: require('prop-types').oneOfType([typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any, require('prop-types').string]), icon: require('prop-types').oneOfType([typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any, require('prop-types').string]), action: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_TileProps', { value: babelPluginFlowReactPropTypes_proptype_TileProps, configurable: true, enumerable: true });









var Tile = function Tile(_ref) {var compact = _ref.compact,title = _ref.title,subtitle = _ref.subtitle,content = _ref.content,icon = _ref.icon,action = _ref.action;
  var classes = classnames('tile', { 'tile-centered': compact });
  return (
    React.createElement('div', { className: classes },
      icon ?
      React.createElement('div', { className: 'tile-icon' },
        icon) :

      null,
      React.createElement('div', { className: 'tile-content' },
        title ? React.createElement('p', { className: 'tile-title' }, title) : null,
        subtitle ? React.createElement('p', { className: 'tile-subtitle text-gray' }, subtitle) : null,
        content),

      action ?
      React.createElement('div', { className: 'tile-action' },
        action) :

      null));


};Tile.propTypes = babelPluginFlowReactPropTypes_proptype_TileProps;
Tile.defaultProps = {
  compact: false,
  title: '',
  subtitle: '',
  content: '',
  icon: null,
  action: null };


export default Tile;