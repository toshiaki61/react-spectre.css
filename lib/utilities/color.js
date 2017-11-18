
import classnames from 'classnames';










function text(_ref) {var primary = _ref.primary,secondary = _ref.secondary,gray = _ref.gray,light = _ref.light,success = _ref.success,warning = _ref.warning,error = _ref.error;var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return classnames({
    'text-primary': primary,
    'text-secondary': secondary,
    'text-gray': gray,
    'text-light': light,
    'text-success': success,
    'text-warning': warning,
    'text-error': error },
  className);
}

function background(_ref2) {var primary = _ref2.primary,secondary = _ref2.secondary,gray = _ref2.gray,light = _ref2.light,success = _ref2.success,warning = _ref2.warning,error = _ref2.error;var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return classnames({
    'bg-primary': primary,
    'bg-secondary': secondary,
    'bg-gray': gray,
    'bg-light': light,
    'bg-success': success,
    'bg-warning': warning,
    'bg-error': error },
  className);
}

export { text, background };