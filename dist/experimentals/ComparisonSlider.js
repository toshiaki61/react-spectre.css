import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, className = _a.className, props = tslib_1.__rest(_a, ["src", "alt", "className"]);
    return (React.createElement("img", tslib_1.__assign({ src: src, className: classnames('rounded', className), alt: alt }, props)));
};
Image.defaultProps = {
    alt: '',
    className: '',
};
var ComparisonSlider = function (_a) {
    var before = _a.before, after = _a.after;
    return (React.createElement("div", { className: "comparison-slider" },
        React.createElement("figure", { className: "comparison-before" },
            React.createElement(Image, tslib_1.__assign({}, before)),
            React.createElement("div", { className: "comparison-label" }, "Before")),
        React.createElement("figure", { className: "comparison-after" },
            React.createElement(Image, tslib_1.__assign({}, after)),
            React.createElement("div", { className: "comparison-label" }, "After"),
            React.createElement("textarea", { className: "comparison-resizer", readOnly: true }))));
};
export default ComparisonSlider;
//# sourceMappingURL=ComparisonSlider.js.map