
import * as React from 'react';
import classnames from 'classnames';var bpfrpt_proptype_TileProps = { compact: PropTypes.bool, title: PropTypes.string, subtitle: PropTypes.string, content: PropTypes.oneOfType([function () {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}, PropTypes.string]), icon: PropTypes.oneOfType([function () {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}, PropTypes.string]), action: function action() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);} };









var Tile = function Tile(_ref)






{var compact = _ref.compact,title = _ref.title,subtitle = _ref.subtitle,content = _ref.content,icon = _ref.icon,action = _ref.action;
  var classes = classnames('tile', { 'tile-centered': compact });
  return (
    React.createElement('div', { className: classes },
      icon ? React.createElement('div', { className: 'tile-icon' }, icon) : null,
      React.createElement('div', { className: 'tile-content' },
        title ? React.createElement('p', { className: 'tile-title' }, title) : null,
        subtitle ?
        React.createElement('p', { className: 'tile-subtitle text-gray' }, subtitle) :
        null,
        content),

      action ? React.createElement('div', { className: 'tile-action' }, action) : null));


};Tile.propTypes = bpfrpt_proptype_TileProps;
Tile.defaultProps = {
  compact: false,
  title: '',
  subtitle: '',
  content: '',
  icon: null,
  action: null };


export default Tile;import PropTypes from 'prop-types';export { bpfrpt_proptype_TileProps };