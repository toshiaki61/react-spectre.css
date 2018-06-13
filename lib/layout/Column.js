var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';var bpfrpt_proptype_ColumnProps = { children: function children() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}, className: PropTypes.string, xs: PropTypes.number, sm: PropTypes.number, md: PropTypes.number, lg: PropTypes.number, xl: PropTypes.number, size: PropTypes.number };











var Column = function Column(_ref)









{var _classnames;var children = _ref.children,className = _ref.className,xs = _ref.xs,sm = _ref.sm,md = _ref.md,lg = _ref.lg,xl = _ref.xl,size = _ref.size,props = _objectWithoutProperties(_ref, ['children', 'className', 'xs', 'sm', 'md', 'lg', 'xl', 'size']);
  var classes = classnames(
  'column', (_classnames = {}, _defineProperty(_classnames, 'col-xs-' + (

  xs || 0), !!xs), _defineProperty(_classnames, 'col-sm-' + (
  sm || 0), !!sm), _defineProperty(_classnames, 'col-md-' + (
  md || 0), !!md), _defineProperty(_classnames, 'col-lg-' + (
  lg || 0), !!lg), _defineProperty(_classnames, 'col-xl-' + (
  xl || 0), !!xl), _defineProperty(_classnames, 'col-' + (
  size || 0), !!size), _classnames),

  className);


  return (
    React.createElement('div', _extends({ className: classes }, props),
      children));


};Column.propTypes = bpfrpt_proptype_ColumnProps;
Column.defaultProps = {
  className: '',
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
  size: 0 };


export default Column;

export var ColumnClassnames = [
'Column12',
'Column11',
'Column10',
'Column9',
'Column8',
'Column7',
'Column6',
'Column5',
'Column4',
'Column3',
'Column2',
'Column1',
'Column'];var _ref2 =















function () {
  var toExport = {};var _loop = function _loop(
  i) {
    var func = function func(_ref3) {var children = _ref3.children,props = _objectWithoutProperties(_ref3, ['children']);return (
        React.createElement(Column, _extends({ size: i }, props),
          children));};


    func.propTypes = { children: PropTypes.node };
    func.defaultProps = { children: null };
    func.funcName = 'Column' + i;
    toExport['Column' + i] = func;};for (var i = 12; i > 0; i -= 1) {_loop(i);
  }
  return toExport;
}(),Column12 = _ref2.Column12,Column11 = _ref2.Column11,Column10 = _ref2.Column10,Column9 = _ref2.Column9,Column8 = _ref2.Column8,Column7 = _ref2.Column7,Column6 = _ref2.Column6,Column5 = _ref2.Column5,Column4 = _ref2.Column4,Column3 = _ref2.Column3,Column2 = _ref2.Column2,Column1 = _ref2.Column1;export { Column12, Column11, Column10, Column9, Column8, Column7, Column6, Column5, Column4, Column3, Column2, Column1 };import PropTypes from 'prop-types';export { bpfrpt_proptype_ColumnProps };