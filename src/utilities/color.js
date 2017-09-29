import classnames from 'classnames';

function text({ primary, secondary, gray, light, success, warning, error }, className = '') {
  return classnames({
    'text-primary': primary,
    'text-secondary': secondary,
    'text-gray': gray,
    'text-light': light,
    'text-success': success,
    'text-warning': warning,
    'text-error': error,
  }, className);
}

function background({ primary, secondary, gray, light, success, warning, error }, className = '') {
  return classnames({
    'bg-primary': primary,
    'bg-secondary': secondary,
    'bg-gray': gray,
    'bg-light': light,
    'bg-success': success,
    'bg-warning': warning,
    'bg-error': error,
  }, className);
}

export { text, background };
