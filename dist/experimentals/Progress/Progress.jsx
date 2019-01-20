import * as tslib_1 from "tslib";
import React from 'react';
var Progress = function (_a) {
    var max = _a.max, props = tslib_1.__rest(_a, ["max"]);
    return (<progress className="progress" max={max} {...props}/>);
};
Progress.defaultProps = { max: 100 };
export default Progress;
//# sourceMappingURL=Progress.jsx.map