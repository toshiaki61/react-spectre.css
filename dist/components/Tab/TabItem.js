import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
import { attr } from 'utilities/attr';
import { LinkHash } from '../../interfaces';
var TabItem = function (_a) {
    var title = _a.title, active = _a.active, badge = _a.badge, onClick = _a.onClick;
    var badgeAttr = badge ? attr({ badge: "" + badge }) : {};
    return (React.createElement("li", { className: cx('tab-item', { active: active }) },
        React.createElement("a", tslib_1.__assign({ href: LinkHash, onClick: onClick }, badgeAttr), title)));
};
export default TabItem;
//# sourceMappingURL=TabItem.js.map