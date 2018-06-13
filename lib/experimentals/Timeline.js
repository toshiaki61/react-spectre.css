
import * as React from 'react';
import classnames from 'classnames';

import Icon from '../elements/Icon';var bpfrpt_proptype_TimelineProps = { children: PropTypes.arrayOf(function () {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}).isRequired, timelines: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired };





var Timeline = function Timeline(_ref) {var children = _ref.children,timelines = _ref.timelines;
  var timeline = children.map(function (child, i) {
    var key = 'timeline-' + i;
    var first = i === 0;
    return (
      React.createElement('div', { key: key, className: 'timeline-item', id: key },
        React.createElement('div', { className: classnames('timeline-left', { 'icon-lg': first }) },
          React.createElement('a', {
              href: '#' + key,
              className: classnames('timeline-icon', 'tooltip', {
                'icon-lg': !first }),

              'data-tooltip': timelines[i] || '' },

            React.createElement(Icon, { check: !first }))),


        React.createElement('div', { className: 'timeline-content' }, child)));


  });
  return React.createElement('div', { className: 'timeline' }, timeline);
};Timeline.propTypes = bpfrpt_proptype_TimelineProps;
Timeline.defaultProps = {};

export default Timeline;import PropTypes from 'prop-types';export { bpfrpt_proptype_TimelineProps };