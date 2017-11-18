
import React from 'react';
import classnames from 'classnames';









var Tile = function Tile(_ref) {var compact = _ref.compact,title = _ref.title,subtitle = _ref.subtitle,content = _ref.content,icon = _ref.icon,action = _ref.action;
  var classes = classnames('tile', { 'tile-centered': compact });
  return (
    React.createElement('div', { className: classes },
      icon ? React.createElement('div', { className: 'tile-icon' },
        icon) :
      null,
      React.createElement('div', { className: 'tile-content' },
        title ? React.createElement('p', { className: 'tile-title' }, title) : null,
        subtitle ? React.createElement('p', { className: 'tile-subtitle text-gray' }, subtitle) : null,
        content),

      action ? React.createElement('div', { className: 'tile-action' },
        action) :
      null));


};
Tile.defaultProps = {
  compact: false,
  title: '',
  subtitle: '',
  content: '',
  icon: null,
  action: null };


export default Tile;