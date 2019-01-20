import React from 'react';
import cx from 'classnames';
import { attr } from '@utils/attr';
import { LinkHash } from '../../interfaces';
var TabItem = function (_a) {
    var title = _a.title, active = _a.active, badge = _a.badge, onClick = _a.onClick;
    var badgeAttr = badge ? attr({ badge: "" + badge }) : {};
    return (<li className={cx('tab-item', { active: active })}>
      <a href={LinkHash} onClick={onClick} {...badgeAttr}>
        {title}
      </a>
    </li>);
};
export default TabItem;
//# sourceMappingURL=TabItem.jsx.map