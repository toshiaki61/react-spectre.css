import classnames from 'classnames';
function text(_a, className) {
    var primary = _a.primary, secondary = _a.secondary, dark = _a.dark, gray = _a.gray, light = _a.light, success = _a.success, warning = _a.warning, error = _a.error;
    if (className === void 0) { className = ''; }
    return classnames({
        'text-primary': primary,
        'text-secondary': secondary,
        'text-dark': dark,
        'text-gray': gray,
        'text-light': light,
        'text-success': success,
        'text-warning': warning,
        'text-error': error,
    }, className);
}
function background(_a, className) {
    var primary = _a.primary, secondary = _a.secondary, dark = _a.dark, gray = _a.gray, light = _a.light, success = _a.success, warning = _a.warning, error = _a.error;
    if (className === void 0) { className = ''; }
    return classnames({
        'bg-primary': primary,
        'bg-secondary': secondary,
        'bg-dark': dark,
        'bg-gray': gray,
        'bg-light': light,
        'bg-success': success,
        'bg-warning': warning,
        'bg-error': error,
    }, className);
}
export { text, background };
//# sourceMappingURL=color.js.map