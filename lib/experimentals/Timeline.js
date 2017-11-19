
import * as React from 'react';
import classnames from 'classnames';

import Icon from '../elements/Icon';var babelPluginFlowReactPropTypes_proptype_TimelineProps = { children: require('prop-types').arrayOf(typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any).isRequired, timelines: require('prop-types').arrayOf(require('prop-types').string).isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_TimelineProps', { value: babelPluginFlowReactPropTypes_proptype_TimelineProps, configurable: true, enumerable: true });





var Timeline = function Timeline(_ref) {var children = _ref.children,timelines = _ref.timelines;
  var timeline = children.map(function (child, i) {
    var key = 'timeline-' + i;
    var first = i === 0;
    return (
      React.createElement('div', { key: key, className: 'timeline-item', id: key },
        React.createElement('div', { className: classnames('timeline-left', { 'icon-lg': first }) },
          React.createElement('a', {
              href: '#' + key,
              className: classnames('timeline-icon', 'tooltip', { 'icon-lg': !first }),
              'data-tooltip': timelines[i] || '' },

            React.createElement(Icon, { check: !first }))),


        React.createElement('div', { className: 'timeline-content' },
          child)));



  });
  return (
    React.createElement('div', { className: 'timeline' },
      timeline));


};Timeline.propTypes = babelPluginFlowReactPropTypes_proptype_TimelineProps;
Timeline.defaultProps = {};

export default Timeline;