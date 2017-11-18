
import React from 'react';
import classnames from 'classnames';

import Icon from '../elements/Icon';





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


};
Timeline.defaultProps = {
  children: [],
  timelines: [] };


export default Timeline;