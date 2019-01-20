import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
var Column = function (_a) {
    var children = _a.children, className = _a.className, xs = _a.xs, sm = _a.sm, md = _a.md, lg = _a.lg, xl = _a.xl, size = _a.size, offset = _a.offset, autoWidth = _a.autoWidth, autoWidthXl = _a.autoWidthXl, autoWidthLg = _a.autoWidthLg, autoWidthMd = _a.autoWidthMd, autoWidthSm = _a.autoWidthSm, autoWidthXs = _a.autoWidthXs, props = tslib_1.__rest(_a, ["children", "className", "xs", "sm", "md", "lg", "xl", "size", "offset", "autoWidth", "autoWidthXl", "autoWidthLg", "autoWidthMd", "autoWidthSm", "autoWidthXs"]);
    var _b;
    return (<div className={cx('column', (_b = {},
        _b["col-xs-" + xs] = xs,
        _b["col-sm-" + sm] = sm,
        _b["col-md-" + md] = md,
        _b["col-lg-" + lg] = lg,
        _b["col-xl-" + xl] = xl,
        _b["col-" + size] = size,
        _b["col-" + offset + "-auto"] = offset,
        _b['col-auto'] = autoWidth,
        _b['col-xl-auto'] = autoWidthXl,
        _b['col-lg-auto'] = autoWidthLg,
        _b['col-md-auto'] = autoWidthMd,
        _b['col-sm-auto'] = autoWidthSm,
        _b['col-xs-auto'] = autoWidthXs,
        _b), className)} {...props}>
    {children}
  </div>);
};
export default Column;
//# sourceMappingURL=Column.jsx.map