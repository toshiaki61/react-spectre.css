import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
var Slider = function (_a) {
    var min = _a.min, max = _a.max, value = _a.value, tooltip = _a.tooltip, onChange = _a.onChange, props = tslib_1.__rest(_a, ["min", "max", "value", "tooltip", "onChange"]);
    return (<input type="range" className={cx('slider', { tooltip: tooltip })} min={min} max={max} value={value} onChange={onChange} {...props}/>);
};
Slider.defaultProps = { min: 0, max: 100 };
export default Slider;
//# sourceMappingURL=Slider.jsx.map