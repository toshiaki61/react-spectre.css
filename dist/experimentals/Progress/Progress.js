import * as tslib_1 from "tslib";
import React from 'react';
var Progress = function (_a) {
    var max = _a.max, props = tslib_1.__rest(_a, ["max"]);
    return (React.createElement("progress", tslib_1.__assign({ className: "progress", max: max }, props)));
};
Progress.defaultProps = { max: 100 };
export default Progress;
//# sourceMappingURL=Progress.js.map