import classnames from 'classnames';
export default function cursor(_a, className) {
    var hand = _a.hand, move = _a.move, zoomIn = _a.zoomIn, zoomOut = _a.zoomOut, notAllowed = _a.notAllowed, auto = _a.auto;
    return classnames({
        'c-hand': hand,
        'c-move': move,
        'c-zoom-in': zoomIn,
        'c-zoom-out': zoomOut,
        'c-not-allowed': notAllowed,
        'c-auto': auto,
    }, className);
}
//# sourceMappingURL=cursor.js.map