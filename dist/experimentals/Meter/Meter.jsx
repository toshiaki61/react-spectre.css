import * as tslib_1 from "tslib";
import React from 'react';
var Meter = function (_a) {
    var value = _a.value, props = tslib_1.__rest(_a, ["value"]);
    return (<meter className="meter" value={value} {...props}/>);
};
Meter.defaultProps = {
    min: 0,
    max: 100,
};
export default Meter;
//# sourceMappingURL=Meter.jsx.map