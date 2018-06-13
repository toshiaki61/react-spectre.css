var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';
import noop from 'lodash.noop';

import Button from '../elements/Button';var bpfrpt_proptype_ModalProps = { active: PropTypes.bool, title: PropTypes.string, content: function content() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}, footer: function footer() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}, small: PropTypes.bool, large: PropTypes.bool, onClearClick: PropTypes.func };











var Modal = function Modal(_ref)








{var active = _ref.active,title = _ref.title,content = _ref.content,footer = _ref.footer,small = _ref.small,large = _ref.large,onClearClick = _ref.onClearClick,props = _objectWithoutProperties(_ref, ['active', 'title', 'content', 'footer', 'small', 'large', 'onClearClick']);
  var classes = classnames('modal', {
    active: active,
    'modal-sm': small,
    'modal-lg': large });

  return (
    React.createElement('div', _extends({ className: classes }, props),
      React.createElement('div', { className: 'modal-overlay' }),
      React.createElement('div', { className: 'modal-container' },
        React.createElement('div', { className: 'modal-header' },
          React.createElement(Button, { clear: true, className: 'float-right', onClick: onClearClick }),
          title ? React.createElement('div', { className: 'modal-title h5' }, title) : null),

        content ?
        React.createElement('div', { className: 'modal-body' },
          React.createElement('div', { className: 'content' }, content)) :

        null,
        footer ? React.createElement('div', { className: 'modal-footer' }, footer) : null)));



};Modal.propTypes = bpfrpt_proptype_ModalProps;
Modal.defaultProps = {
  active: false,
  title: '',
  content: null,
  footer: null,
  small: false,
  large: false,
  onClearClick: noop };


export default Modal;import PropTypes from 'prop-types';export { bpfrpt_proptype_ModalProps };