import React from 'react';
import { hasStepChildren } from './util';
import StepItem from './StepItem';
function renderStep(p) {
    if (hasStepChildren(p)) {
        return p.children;
    }
    var items = p.items, activeId = p.activeId;
    return items.map(function (item) { return (<StepItem key={item.id} {...item} active={item.id === activeId}>
      {item.children}
    </StepItem>); });
}
var Step = function (p) { return <ul className="step">{renderStep(p)}</ul>; };
export default Step;
//# sourceMappingURL=Step.jsx.map