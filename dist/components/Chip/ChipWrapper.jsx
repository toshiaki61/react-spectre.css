import * as tslib_1 from "tslib";
import React from 'react';
var ChipWrapper = function (_a) {
    var children = _a.children, htmlFor = _a.htmlFor, rest = tslib_1.__rest(_a, ["children", "htmlFor"]);
    return htmlFor ? (<label {...rest} htmlFor={htmlFor}>
      {children}
    </label>) : (<span {...rest}>{children}</span>);
};
export default ChipWrapper;
//# sourceMappingURL=ChipWrapper.jsx.map