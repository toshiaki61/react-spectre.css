import React from 'react';
import cx from 'classnames';
import { attr } from '@utils/attr';
var TimelineIcon = function (_a) {
    var children = _a.children, id = _a.id, tooltip = _a.tooltip, lg = _a.lg;
    return (<a href={"#" + id} {...attr({
        tooltip: tooltip,
        className: cx('timeline-icon', {
            'icon-lg': lg,
        }),
    })}>
    {children}
  </a>);
};
export default TimelineIcon;
//# sourceMappingURL=TimelineIcon.jsx.map