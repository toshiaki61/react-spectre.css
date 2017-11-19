
import * as React from 'react';
import classnames from 'classnames';

var sharp = '#';var babelPluginFlowReactPropTypes_proptype_ItemProps = { id: require('prop-types').string.isRequired, name: require('prop-types').string.isRequired, tooltip: require('prop-types').string.isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_ItemProps', { value: babelPluginFlowReactPropTypes_proptype_ItemProps, configurable: true, enumerable: true });var babelPluginFlowReactPropTypes_proptype_StepProps = { items: require('prop-types').arrayOf(require('prop-types').shape({ id: require('prop-types').string.isRequired, name: require('prop-types').string.isRequired, tooltip: require('prop-types').string.isRequired })).isRequired, active: require('prop-types').string };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_StepProps', { value: babelPluginFlowReactPropTypes_proptype_StepProps, configurable: true, enumerable: true });










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
            React.createElement('a', { href: sharp, className: 'tooltip', 'data-tooltip': tooltip }, name)));


      })));


};Step.propTypes = babelPluginFlowReactPropTypes_proptype_StepProps;
Step.defaultProps = {
  active: '' };


export default Step;