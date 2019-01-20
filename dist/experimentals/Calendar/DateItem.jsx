import React from 'react';
import cx from 'classnames';
import { Button } from '@elements/index';
var DateItem = function (_a) {
    var children = _a.children, active = _a.active, disabled = _a.disabled, badge = _a.badge, today = _a.today, onClick = _a.onClick;
    return (<Button disabled={disabled} className={cx('date-item', {
        active: active,
        badge: badge,
        'date-today': today,
    })} onClick={onClick}>
    {children}
  </Button>);
};
export default DateItem;
//# sourceMappingURL=DateItem.jsx.map