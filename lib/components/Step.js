
import * as React from 'react';
import classnames from 'classnames';

var sharp = '#';var bpfrpt_proptype_ItemProps = { id: PropTypes.string.isRequired, name: PropTypes.string.isRequired, tooltip: PropTypes.string.isRequired };var bpfrpt_proptype_StepProps = { items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, name: PropTypes.string.isRequired, tooltip: PropTypes.string.isRequired }).isRequired).isRequired, active: PropTypes.string };










var Step = function Step(_ref) {var items = _ref.items,active = _ref.active;
  if (!items.length) {
    return null;
  }
  return (
    React.createElement('ul', { className: 'step' },
      items.map(function (_ref2) {var id = _ref2.id,name = _ref2.name,tooltip = _ref2.tooltip;
        var key = 'step-' + id;
        return (
          React.createElement('li', {
              key: key,
              className: classnames('step-item', { active: id === active }) },

            React.createElement('a', { href: sharp, className: 'tooltip', 'data-tooltip': tooltip },
              name)));



      })));


};Step.propTypes = bpfrpt_proptype_StepProps;
Step.defaultProps = {
  active: '' };


export default Step;import PropTypes from 'prop-types';export { bpfrpt_proptype_ItemProps };export { bpfrpt_proptype_StepProps };