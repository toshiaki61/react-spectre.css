import React from 'react';
import cx from 'classnames';
import { LinkHash } from '../../interfaces';
var PaginationTitleItem = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, current = _a.current, value = _a.value, onClick = _a.onClick;
    var handleLinkClick = 
    // useCallback(
    function (e) { return onClick && onClick(e, value); };
    // ,[value])
    return (<li className={cx('page-item', {
        'page-prev': current > value,
        'page-next': current < value,
    })}>
      <a href={LinkHash} onClick={handleLinkClick}>
        <div className="page-item-subtitle">{subtitle}</div>
        <div className="page-item-title h5">{title}</div>
      </a>
    </li>);
};
export default PaginationTitleItem;
//# sourceMappingURL=PaginationTitleItem.jsx.map