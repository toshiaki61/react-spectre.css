import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
var Column = function (_a) {
    var children = _a.children, className = _a.className, xs = _a.xs, sm = _a.sm, md = _a.md, lg = _a.lg, xl = _a.xl, size = _a.size, props = tslib_1.__rest(_a, ["children", "className", "xs", "sm", "md", "lg", "xl", "size"]);
    var _b;
    var classes = classnames('column', (_b = {},
        _b["col-xs-" + (xs || 0)] = !!xs,
        _b["col-sm-" + (sm || 0)] = !!sm,
        _b["col-md-" + (md || 0)] = !!md,
        _b["col-lg-" + (lg || 0)] = !!lg,
        _b["col-xl-" + (xl || 0)] = !!xl,
        _b["col-" + (size || 0)] = !!size,
        _b), className);
    return (React.createElement("div", tslib_1.__assign({ className: classes }, props), children));
};
Column.defaultProps = {
    className: '',
    xs: 0,
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0,
    size: 0,
};
export default Column;
//# sourceMappingURL=Column.js.map