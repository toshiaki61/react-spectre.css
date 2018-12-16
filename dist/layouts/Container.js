import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
var Container = function (_a) {
    var children = _a.children, className = _a.className, xs = _a.xs, sm = _a.sm, md = _a.md, lg = _a.lg, xl = _a.xl, props = tslib_1.__rest(_a, ["children", "className", "xs", "sm", "md", "lg", "xl"]);
    var classes = classnames('container', {
        xs: xs,
        sm: sm,
        md: md,
        lg: lg,
        xl: xl,
    }, className);
    return (React.createElement("section", tslib_1.__assign({ className: classes }, props), children));
};
Container.defaultProps = {
    className: '',
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
};
export default Container;
//# sourceMappingURL=Container.js.map