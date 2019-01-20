import React, { Fragment } from 'react';
import cx from 'classnames';
import { Divider } from '@utils/Divider';
import { hasMenuItemChildren, isMenuItemDivider } from './util';
import MenuBadge from './MenuBadge';
function renderMenuitem(p) {
    if (isMenuItemDivider(p)) {
        return null;
    }
    if (hasMenuItemChildren(p)) {
        return p.children;
    }
    var id = p.id, link = p.link, content = p.content, active = p.active, badge = p.badge, onClick = p.onClick;
    var handleItemClick = 
    // useCallback(
    function (e) {
        e.preventDefault();
        if (onClick) {
            onClick(e, id || '');
        }
    };
    // ,[id])
    return (<Fragment>
      <MenuBadge content={badge}/>
      <a href={link} className={cx({ active: active })} onClick={handleItemClick}>
        {content}
      </a>
    </Fragment>);
}
var MenuItem = function (p) {
    var className = p.className;
    if (isMenuItemDivider(p)) {
        return (<Divider className={cx('menu-item', className)} content={p.divider === 'string' ? p.divider : ''}/>);
    }
    return <li className={cx('menu-item', className)}>{renderMenuitem(p)}</li>;
};
MenuItem.defaultProps = {
    link: 'javascript:void(0)',
};
export default MenuItem;
//# sourceMappingURL=MenuItem.jsx.map