
import React from 'react';
import classnames from 'classnames';










var Step = function Step(_ref) {var items = _ref.items,active = _ref.active;
  if (!items.length) {
    return null;
  }
  return (
    React.createElement('ul', { className: 'step' },
      items.map(function (_ref2) {var id = _ref2.id,name = _ref2.name,tooltip = _ref2.tooltip;
        var key = 'step-' + id;
        return (
          React.createElement('li', { key: key, className: classnames('step-item', { active: id === active }) },
            React.createElement('a', { href: '#', className: 'tooltip', 'data-tooltip': tooltip }, name)));


      })));


};
Step.defaultProps = {
  items: [],
  active: '' };


export default Step;