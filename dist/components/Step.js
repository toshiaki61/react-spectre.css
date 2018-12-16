import classnames from 'classnames';
import React from 'react';
var sharp = '#';
var Step = function (_a) {
    var items = _a.items, active = _a.active;
    if (!items.length) {
        return null;
    }
    return (React.createElement("ul", { className: "step" }, items.map(function (_a) {
        var id = _a.id, name = _a.name, tooltip = _a.tooltip;
        var key = "step-" + id;
        return (React.createElement("li", { key: key, className: classnames('step-item', { active: id === active }) },
            React.createElement("a", { href: sharp, className: "tooltip", "data-tooltip": tooltip }, name)));
    })));
};
Step.defaultProps = {
    active: '',
};
export default Step;
//# sourceMappingURL=Step.js.map