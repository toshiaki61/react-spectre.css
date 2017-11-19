var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
import * as React from 'react';
import classnames from 'classnames';

var sharp = '#';var babelPluginFlowReactPropTypes_proptype_LinkProps = { onClick: require('prop-types').func.isRequired, className: require('prop-types').string, "data-badge": require('prop-types').oneOfType([require('prop-types').number, require('prop-types').string]) };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_LinkProps', { value: babelPluginFlowReactPropTypes_proptype_LinkProps, configurable: true, enumerable: true });var babelPluginFlowReactPropTypes_proptype_ItemProps = { id: require('prop-types').string.isRequired, name: require('prop-types').string.isRequired, badge: require('prop-types').oneOfType([require('prop-types').number, require('prop-types').string]).isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_ItemProps', { value: babelPluginFlowReactPropTypes_proptype_ItemProps, configurable: true, enumerable: true });var babelPluginFlowReactPropTypes_proptype_TabProps = { items: require('prop-types').arrayOf(require('prop-types').shape({ id: require('prop-types').string.isRequired, name: require('prop-types').string.isRequired, badge: require('prop-types').oneOfType([require('prop-types').number, require('prop-types').string]).isRequired })).isRequired, active: require('prop-types').string, onClick: require('prop-types').func.isRequired, action: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_TabProps', { value: babelPluginFlowReactPropTypes_proptype_TabProps, configurable: true, enumerable: true });
















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
            React.createElement('a', _extends({ href: sharp }, linkProp), name)));


      }),
      action ?
      React.createElement('li', { className: 'tab-item tab-action' },
        action) :

      null));


};Tab.propTypes = babelPluginFlowReactPropTypes_proptype_TabProps;
Tab.defaultProps = {
  active: '',
  action: null };


export default Tab;