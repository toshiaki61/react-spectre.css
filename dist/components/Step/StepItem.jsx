import React from 'react';
import cx from 'classnames';
import { attr } from '@utils/attr';
import { LinkHash } from '../../interfaces';
var StepItem = function (_a) {
    var children = _a.children, active = _a.active, tooltip = _a.tooltip;
    return (<li className={cx('step-item', { active: active })}>
    <a href={LinkHash} {...attr({ tooltip: tooltip })}>
      {children}
    </a>
  </li>);
};
export default StepItem;
//# sourceMappingURL=StepItem.jsx.map