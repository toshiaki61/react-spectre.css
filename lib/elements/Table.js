var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import React from 'react';
import classnames from 'classnames';








var Table = function Table(_ref) {var header = _ref.header,contents = _ref.contents,className = _ref.className,striped = _ref.striped,hover = _ref.hover,props = _objectWithoutProperties(_ref, ['header', 'contents', 'className', 'striped', 'hover']);
  var classes = classnames(
  'table',
  {
    'table-striped': striped,
    'table-hover': hover },

  className);

  return (
    React.createElement('table', _extends({ className: classes }, props),
      React.createElement('thead', null,
        React.createElement('tr', null,
          header.map(function (row, i) {
            var key = 'header-' + i;
            return (
              React.createElement('th', { key: key }, row));

          }))),


      React.createElement('tbody', null,
        contents.map(function (content, i) {
          var rowKey = 'row-' + i;
          return (
            React.createElement('tr', { key: rowKey },
              content.map(function (column, j) {
                var columnKey = 'column-' + j;
                return (
                  React.createElement('td', { key: columnKey }, column));

              })));


        }))));



};
Table.defaultProps = {
  className: '',
  striped: false,
  hover: false };


export default Table;