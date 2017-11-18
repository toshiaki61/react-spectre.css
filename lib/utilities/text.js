
import classnames from 'classnames';

















export default function text(_ref,














className) {var left = _ref.left,center = _ref.center,right = _ref.right,justify = _ref.justify,lowercase = _ref.lowercase,uppercase = _ref.uppercase,capitalize = _ref.capitalize,normal = _ref.normal,bold = _ref.bold,italic = _ref.italic,large = _ref.large,ellipsis = _ref.ellipsis,clip = _ref.clip,textBreak = _ref.textBreak;
  return classnames({
    'text-left': left,
    'text-center': center,
    'text-right': right,
    'text-justify': justify,
    'text-lowercase': lowercase,
    'text-uppercase': uppercase,
    'text-capitalize': capitalize,
    'text-normal': normal,
    'text-bold': bold,
    'text-italic': italic,
    'text-large': large,
    'text-ellipsis': ellipsis,
    'text-clip': clip,
    'text-break': textBreak },
  className);
}