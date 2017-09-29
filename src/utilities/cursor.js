import classnames from 'classnames';

export default function cursor({ hand, move, zoomIn, zoomOut, notAllowed, auto }, className) {
  return classnames({
    'c-hand': hand,
    'c-move': move,
    'c-zoom-in': zoomIn,
    'c-zoom-out': zoomOut,
    'c-not-allowed': notAllowed,
    'c-auto': auto,
  }, className);
}
