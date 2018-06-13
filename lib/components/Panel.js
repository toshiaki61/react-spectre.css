
import * as React from 'react';
import classnames from 'classnames';var bpfrpt_proptype_PanelProps = { header: function header() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}, nav: function nav() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}, content: function content() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}, footer: function footer() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}, headerClass: PropTypes.string };








var Panel = function Panel(_ref)





{var header = _ref.header,nav = _ref.nav,content = _ref.content,footer = _ref.footer,headerClass = _ref.headerClass;
  var headerClasses = classnames('panel-header', headerClass);
  return (
    React.createElement('div', { className: 'panel' },
      header ?
      React.createElement('div', { className: headerClasses },
        typeof header === 'string' ?
        React.createElement('div', { className: 'panel-title' }, header) :

        header) :


      null,
      nav ? React.createElement('div', { className: 'panel-nav' }, nav) : null,
      content ? React.createElement('div', { className: 'panel-body' }, content) : null,
      footer ? React.createElement('div', { className: 'panel-footer' }, footer) : null));


};Panel.propTypes = bpfrpt_proptype_PanelProps;
Panel.defaultProps = {
  header: null,
  nav: null,
  content: null,
  footer: null,
  headerClass: '' };


export default Panel;import PropTypes from 'prop-types';export { bpfrpt_proptype_PanelProps };