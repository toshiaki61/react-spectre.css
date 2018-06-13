var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
import * as React from 'react';
import classnames from 'classnames';
import noop from 'lodash.noop';

var sharp = '#';

function calculateStartAndEnd(
current,
total,
each)
{
  if (total <= 2 * each + 5) {
    return { start: 1, end: total };
  } else if (current <= each + 3) {
    return { start: 1, end: 2 * each + 3 };
  } else if (current >= total - (each + 2)) {
    return { start: total - 2 * each - 2, end: total };
  }
  return { start: current - each, end: current + each };
}

function pages(
current,
total)


{var each = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;var skip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '...';
  var page = calculateStartAndEnd(current, total, each);
  var result = [];
  if (page.start > 1) {
    result.push({ label: '1', value: 1 });
  }
  if (page.start > 2) {
    result.push({ label: skip, value: 0 });
  }
  for (var i = page.start; i <= page.end; i += 1) {
    result.push({ label: '' + i, value: i });
  }
  if (page.end < total - 1) {
    result.push({ label: skip, value: 0 });
  }
  if (page.end < total) {
    result.push({ label: '' + total, value: total });
  }
  return result;
}var bpfrpt_proptype_ItemProps = { label: PropTypes.string.isRequired, current: PropTypes.number.isRequired, value: PropTypes.number.isRequired, disabled: PropTypes.bool, onClick: PropTypes.func.isRequired };








var Item = function Item(_ref)





{var current = _ref.current,value = _ref.value,label = _ref.label,disabled = _ref.disabled,onClick = _ref.onClick;
  var classes = classnames('page-item', {
    disabled: disabled,
    active: value === current });

  var linkProp = {};
  if (disabled) {
    linkProp.tabIndex = -1;
  }
  return (
    React.createElement('li', { className: classes },
      React.createElement('a', _extends({ href: sharp }, linkProp, { onClick: function (_onClick) {function onClick(_x3) {return _onClick.apply(this, arguments);}onClick.toString = function () {return _onClick.toString();};return onClick;}(function (e) {return onClick(e, value);}) }),
        label)));



};Item.propTypes = bpfrpt_proptype_ItemProps;
Item.defaultProps = {
  disabled: false };var bpfrpt_proptype_TitleProps = { title: PropTypes.string.isRequired, subtitle: PropTypes.string.isRequired, current: PropTypes.number.isRequired, value: PropTypes.number.isRequired, onClick: PropTypes.func.isRequired };









var Title = function Title(_ref2)





{var title = _ref2.title,subtitle = _ref2.subtitle,current = _ref2.current,value = _ref2.value,onClick = _ref2.onClick;
  var classes = classnames('page-item', {
    'page-prev': current > value,
    'page-next': current < value });

  return (
    React.createElement('li', { className: classes },
      React.createElement('a', { href: sharp, onClick: function (_onClick2) {function onClick(_x4) {return _onClick2.apply(this, arguments);}onClick.toString = function () {return _onClick2.toString();};return onClick;}(function (e) {return onClick(e, value);}) },
        React.createElement('div', { className: 'page-item-subtitle' }, subtitle),
        React.createElement('div', { className: 'page-item-title h5' }, title))));



};Title.propTypes = bpfrpt_proptype_TitleProps;var bpfrpt_proptype_PaginationProps = { label: PropTypes.shape({ previous: PropTypes.oneOfType([PropTypes.string, function () {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}]).isRequired, next: PropTypes.oneOfType([PropTypes.string, function () {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}]).isRequired, skip: PropTypes.oneOfType([PropTypes.string, function () {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}]).isRequired }).isRequired, total: PropTypes.number.isRequired, current: PropTypes.number.isRequired, each: PropTypes.number.isRequired, title: PropTypes.shape({ prev: PropTypes.shape({ title: PropTypes.string.isRequired, subtitle: PropTypes.string.isRequired }).isRequired, next: PropTypes.shape({ title: PropTypes.string.isRequired, subtitle: PropTypes.string.isRequired }).isRequired }), onClick: PropTypes.func.isRequired };
















var Pagination = function Pagination(_ref3)






{var label = _ref3.label,current = _ref3.current,total = _ref3.total,each = _ref3.each,title = _ref3.title,onClick = _ref3.onClick;
  if (title) {
    return (
      React.createElement('ul', { className: 'pagination' },
        React.createElement(Title, {
          title: title.prev.title,
          subtitle: title.prev.subtitle,
          current: current,
          value: current - 1,
          onClick: onClick }),

        React.createElement(Title, {
          title: title.next.title,
          subtitle: title.next.subtitle,
          current: current,
          value: current + 1,
          onClick: onClick })));



  }
  var list = pages(current, total, each, label.skip);
  return (
    React.createElement('ul', { className: 'pagination' },
      React.createElement(Item, {
        current: current,
        label: label.previous,
        disabled: current === 1,
        value: current - 1,
        onClick: onClick }),

      list.map(function (row, i) {
        var key = 'paging-' + i;
        return (
          React.createElement(Item, _extends({
            key: key },
          row, {
            current: current,
            disabled: !row.value,
            onClick: onClick })));


      }),
      React.createElement(Item, {
        current: current,
        label: label.next,
        disabled: current === total,
        value: current + 1,
        onClick: onClick })));



};Pagination.propTypes = bpfrpt_proptype_PaginationProps;
Pagination.defaultProps = {
  label: { previous: 'Previous', next: 'Next', skip: '...' },
  total: 1,
  current: 1,
  each: 1,
  title: undefined,
  onClick: noop };


export default Pagination;import PropTypes from 'prop-types';export { bpfrpt_proptype_ItemProps };export { bpfrpt_proptype_TitleProps };export { bpfrpt_proptype_PaginationProps };