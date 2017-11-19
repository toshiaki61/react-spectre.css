
import * as React from 'react';
import classnames from 'classnames';var babelPluginFlowReactPropTypes_proptype_PanelProps = { header: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any, nav: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any, content: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any, footer: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any, headerClass: require('prop-types').string };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_PanelProps', { value: babelPluginFlowReactPropTypes_proptype_PanelProps, configurable: true, enumerable: true });








var Panel = function Panel(_ref) {var header = _ref.header,nav = _ref.nav,content = _ref.content,footer = _ref.footer,headerClass = _ref.headerClass;
  var headerClasses = classnames('panel-header', headerClass);
  return (
    React.createElement('div', { className: 'panel' },
      header ?
      React.createElement('div', { className: headerClasses },
        typeof header === 'string' ? React.createElement('div', { className: 'panel-title' }, header) : header) :

      null,
      nav ?
      React.createElement('div', { className: 'panel-nav' },
        nav) :

      null,
      content ?
      React.createElement('div', { className: 'panel-body' },
        content) :

      null,
      footer ?
      React.createElement('div', { className: 'panel-footer' },
        footer) :

      null));


};Panel.propTypes = babelPluginFlowReactPropTypes_proptype_PanelProps;
Panel.defaultProps = {
  header: null,
  nav: null,
  content: null,
  footer: null,
  headerClass: '' };


export default Panel;