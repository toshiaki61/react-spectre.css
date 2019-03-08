import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
import { attr } from '@utils/attr';
import { LinkHash } from '../../interfaces';
var StepItem = function (_a) {
    var children = _a.children, active = _a.active, tooltip = _a.tooltip;
    return (React.createElement("li", { className: cx('step-item', { active: active }) },
        React.createElement("a", tslib_1.__assign({ href: LinkHash }, attr({ tooltip: tooltip })), children)));
};
export default StepItem;
//# sourceMappingURL=StepItem.js.map