var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
import * as React from 'react';var bpfrpt_proptype_ItemHeaderProps = { button: function button() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}, title: function title() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}, subtitle: function subtitle() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);} };var bpfrpt_proptype_ItemProps = { type: PropTypes.oneOf(['image', 'body', 'footer', 'header']), content: function content() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);} };










var Item = function Item(_ref) {var type = _ref.type,content = _ref.content;
  switch (type) {
    case 'image':
      return React.createElement('div', { className: 'card-image' }, content);
    case 'body':
      return React.createElement('div', { className: 'card-body' }, content);
    case 'footer':
    default:
      return React.createElement('div', { className: 'card-footer' }, content);}

};Item.propTypes = bpfrpt_proptype_ItemProps;
Item.defaultProps = {
  type: '',
  content: null };var bpfrpt_proptype_CardProps = { items: PropTypes.arrayOf(PropTypes.shape({ type: PropTypes.oneOf(['image', 'body', 'footer', 'header']), content: function content() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);} }).isRequired).isRequired };





var Card = function Card(_ref2) {var items = _ref2.items;return (
    React.createElement('div', { className: 'card' },
      items.map(function (item, i) {
        var key = 'card-' + i;
        if (item.type === 'header') {
          return (
            React.createElement('div', { key: key, className: 'card-header' },
              item.content.button,
              item.content.title ?
              React.createElement('div', { className: 'card-title h5' }, item.content.title) :
              null,
              item.content.subtitle ?
              React.createElement('div', { className: 'card-subtitle text-gray' },
                item.content.subtitle) :

              null));


        }
        return React.createElement(Item, _extends({ key: key }, item));
      })));};Card.propTypes = bpfrpt_proptype_CardProps;



export default Card;import PropTypes from 'prop-types';export { bpfrpt_proptype_ItemHeaderProps };export { bpfrpt_proptype_ItemProps };export { bpfrpt_proptype_CardProps };