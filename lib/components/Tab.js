var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
import * as React from 'react';
import classnames from 'classnames';

var sharp = '#';var bpfrpt_proptype_LinkProps = { onClick: PropTypes.func.isRequired, className: PropTypes.string, "data-badge": PropTypes.oneOfType([PropTypes.number, PropTypes.string]) };var bpfrpt_proptype_ItemProps = { id: PropTypes.string.isRequired, name: PropTypes.string.isRequired, badge: PropTypes.oneOfType([PropTypes.number, PropTypes.string]) };var bpfrpt_proptype_TabProps = { items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, name: PropTypes.string.isRequired, badge: PropTypes.oneOfType([PropTypes.number, PropTypes.string]) }).isRequired).isRequired, active: PropTypes.string, onClick: PropTypes.func.isRequired, action: function action() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);} };
















var Tab = function Tab(_ref)




{var items = _ref.items,active = _ref.active,onClick = _ref.onClick,action = _ref.action;
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
          React.createElement('li', {
              key: key,
              className: classnames('tab-item', { active: id === active }) },

            React.createElement('a', _extends({ href: sharp }, linkProp),
              name)));



      }),
      action ? React.createElement('li', { className: 'tab-item tab-action' }, action) : null));


};Tab.propTypes = bpfrpt_proptype_TabProps;
Tab.defaultProps = {
  active: '',
  action: null };


export default Tab;import PropTypes from 'prop-types';export { bpfrpt_proptype_LinkProps };export { bpfrpt_proptype_ItemProps };export { bpfrpt_proptype_TabProps };