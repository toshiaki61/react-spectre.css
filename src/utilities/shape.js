import classnames from 'classnames';

export default function shape({ rounded, circle }, className = '') {
  return classnames({
    rounded,
    circle,
  }, className);
}
