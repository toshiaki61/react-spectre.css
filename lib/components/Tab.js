var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
import React from 'react';
import classnames from 'classnames';
import noop from 'lodash.noop';

















var Tab = function Tab(_ref) {var items = _ref.items,active = _ref.active,onClick = _ref.onClick,action = _ref.action;
  if (!items.length) {
    return null;
  }
  return (
    React.createElement('ul', { className: 'tab tab-block' },
      items.map(function (_ref2) {var id = _ref2.id,name = _ref2.name,badge = _ref2.badge;
        var key = 'tab-' + id;
        var linkProp = {
          onClick: function (_onClick) {function onClick(_x) {return _onClick.apply(this, arguments);}onClick.toString = function () {return _onClick.toString();};return onClick;}(function (e) {return onClick(e, id);}) };

        if (badge) {
          linkProp.className = 'badge';
          linkProp['data-badge'] = badge;
        }
        return (
          React.createElement('li', { key: key, className: classnames('tab-item', { active: id === active }) },
            React.createElement('a', _extends({ href: '#' }, linkProp), name)));


      }),
      action ? React.createElement('li', { className: 'tab-item tab-action' },
        action) :
      null));


};
Tab.defaultProps = {
  items: [],
  active: '',
  onClick: noop,
  action: null };


export default Tab;