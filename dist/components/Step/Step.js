import * as tslib_1 from "tslib";
import React from 'react';
import { hasStepChildren } from './util';
import StepItem from './StepItem';
function renderStep(p) {
    if (hasStepChildren(p)) {
        return p.children;
    }
    var items = p.items, activeId = p.activeId;
    return items.map(function (item) { return (React.createElement(StepItem, tslib_1.__assign({ key: item.id }, item, { active: item.id === activeId }), item.children)); });
}
var Step = function (p) { return React.createElement("ul", { className: "step" }, renderStep(p)); };
export default Step;
//# sourceMappingURL=Step.js.map