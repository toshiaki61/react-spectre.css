import * as tslib_1 from "tslib";
import React, { Fragment } from 'react';
import { hasComparisonSliderChildren } from './util';
import ComparisonAfter from './ComparisonAfter';
import ComparisonBefore from './ComparisonBefore';
import ComparisonImage from './ComparisonImage';
import ComparisonLabel from './ComparisonLabel';
import ComparisonResizer from './ComparisonResizer';
function renderComparisonSlider(p) {
    if (hasComparisonSliderChildren(p)) {
        return p.children;
    }
    var before = p.before, after = p.after;
    return (React.createElement(Fragment, null,
        React.createElement(ComparisonBefore, null,
            React.createElement(ComparisonImage, tslib_1.__assign({}, before)),
            React.createElement(ComparisonLabel, null, "Before")),
        React.createElement(ComparisonAfter, null,
            React.createElement(ComparisonImage, tslib_1.__assign({}, after)),
            React.createElement(ComparisonLabel, null, "After"),
            React.createElement(ComparisonResizer, null))));
}
var ComparisonSlider = function (p) { return (React.createElement("div", { className: "comparison-slider" }, renderComparisonSlider(p))); };
export default ComparisonSlider;
//# sourceMappingURL=ComparisonSlider.js.map