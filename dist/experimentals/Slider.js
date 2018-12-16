import * as tslib_1 from "tslib";
import React from 'react';
import Input from '../elements/form/Input';
var Slider = function (_a) {
    var min = _a.min, max = _a.max, value = _a.value, onChange = _a.onChange, props = tslib_1.__rest(_a, ["min", "max", "value", "onChange"]);
    return (React.createElement(Input, tslib_1.__assign({ slider: true, min: min, max: max, value: value, onChange: onChange, "data-tooltip": value }, props)));
};
Slider.defaultProps = { min: 0, max: 100 };
export default Slider;
//# sourceMappingURL=Slider.js.map