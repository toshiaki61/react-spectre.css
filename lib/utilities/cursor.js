
import classnames from 'classnames';









export default function cursor(_ref, className) {var hand = _ref.hand,move = _ref.move,zoomIn = _ref.zoomIn,zoomOut = _ref.zoomOut,notAllowed = _ref.notAllowed,auto = _ref.auto;
  return classnames({
    'c-hand': hand,
    'c-move': move,
    'c-zoom-in': zoomIn,
    'c-zoom-out': zoomOut,
    'c-not-allowed': notAllowed,
    'c-auto': auto },
  className);
}