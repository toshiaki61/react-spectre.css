var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
import React from 'react';










var Item = function Item(_ref) {var type = _ref.type,content = _ref.content;
  switch (type) {
    case 'image':
      return (
        React.createElement('div', { className: 'card-image' },
          content));


    case 'body':
      return (
        React.createElement('div', { className: 'card-body' },
          content));


    case 'footer':
    default:
      return (
        React.createElement('div', { className: 'card-footer' },
          content));}



};
Item.defaultProps = {
  type: '',
  content: null };





var Card = function Card(_ref2) {var items = _ref2.items;return (
    React.createElement('div', { className: 'card' },
      items.map(function (item, i) {
        var key = 'card-' + i;
        if (item.type === 'header') {
          return (
            React.createElement('div', { key: key, className: 'card-header' },
              item.content.button,
              item.content.title ? React.createElement('div', { className: 'card-title h5' }, item.content.title) : null,
              item.content.subtitle ? React.createElement('div', { className: 'card-subtitle text-gray' }, item.content.subtitle) : null));


        }
        return (
          React.createElement(Item, _extends({ key: key }, item)));

      })));};


Card.defaultProps = {
  items: [] };


export default Card;