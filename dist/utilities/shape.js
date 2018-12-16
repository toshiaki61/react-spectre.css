import classnames from 'classnames';
export default function shape(_a, className) {
    var rounded = _a.rounded, circle = _a.circle;
    if (className === void 0) { className = ''; }
    return classnames({
        's-rounded': rounded,
        's-circle': circle,
    }, className);
}
//# sourceMappingURL=shape.js.map