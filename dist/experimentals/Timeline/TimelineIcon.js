import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
import { attr } from 'utilities/attr';
var TimelineIcon = function (_a) {
    var children = _a.children, id = _a.id, tooltip = _a.tooltip, lg = _a.lg;
    return (React.createElement("a", tslib_1.__assign({ href: "#" + id }, attr({
        tooltip: tooltip,
        className: cx('timeline-icon', {
            'icon-lg': lg,
        }),
    })), children));
};
export default TimelineIcon;
//# sourceMappingURL=TimelineIcon.js.map