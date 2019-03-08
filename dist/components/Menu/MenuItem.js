import React, { Fragment } from 'react';
import cx from 'classnames';
import { Divider } from 'utilities/Divider';
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
    return (React.createElement(Fragment, null,
        React.createElement(MenuBadge, { content: badge }),
        React.createElement("a", { href: link, className: cx({ active: active }), onClick: handleItemClick }, content)));
}
var MenuItem = function (p) {
    var className = p.className;
    if (isMenuItemDivider(p)) {
        return (React.createElement(Divider, { className: cx('menu-item', className), content: p.divider === 'string' ? p.divider : '' }));
    }
    return React.createElement("li", { className: cx('menu-item', className) }, renderMenuitem(p));
};
MenuItem.defaultProps = {
    link: 'javascript:void(0)',
};
export default MenuItem;
//# sourceMappingURL=MenuItem.js.map