
import classnames from 'classnames';var bpfrpt_proptype_ColorParameters = { primary: PropTypes.bool, secondary: PropTypes.bool, dark: PropTypes.bool, gray: PropTypes.bool, light: PropTypes.bool, success: PropTypes.bool, warning: PropTypes.bool, error: PropTypes.bool };












function text(_ref)











{var primary = _ref.primary,secondary = _ref.secondary,dark = _ref.dark,gray = _ref.gray,light = _ref.light,success = _ref.success,warning = _ref.warning,error = _ref.error;var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return classnames(
  {
    'text-primary': primary,
    'text-secondary': secondary,
    'text-dark': dark,
    'text-gray': gray,
    'text-light': light,
    'text-success': success,
    'text-warning': warning,
    'text-error': error },

  className);

}

function background(_ref2)











{var primary = _ref2.primary,secondary = _ref2.secondary,dark = _ref2.dark,gray = _ref2.gray,light = _ref2.light,success = _ref2.success,warning = _ref2.warning,error = _ref2.error;var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return classnames(
  {
    'bg-primary': primary,
    'bg-secondary': secondary,
    'bg-dark': dark,
    'bg-gray': gray,
    'bg-light': light,
    'bg-success': success,
    'bg-warning': warning,
    'bg-error': error },

  className);

}

export { text, background };import PropTypes from 'prop-types';export { bpfrpt_proptype_ColorParameters };