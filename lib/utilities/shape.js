
import classnames from 'classnames';





export default function shape(_ref)


{var rounded = _ref.rounded,circle = _ref.circle;var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return classnames(
  {
    rounded: rounded,
    circle: circle },

  className);

}