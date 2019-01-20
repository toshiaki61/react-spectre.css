import React from 'react';
import cx from 'classnames';
import { hasNavChildren } from './util';
import NavItem from './NavItem';
function renderNav(p) {
    if (hasNavChildren(p)) {
        return p.children;
    }
    var items = p.items, activeId = p.activeId, onClick = p.onClick;
    return items.map(function (item) { return (<NavItem key={item.id} {...item} active={activeId === item.id} onClick={onClick}/>); });
}
var Nav = function (p) { return (<ul className={cx('nav', p.className)}>{renderNav(p)}</ul>); };
export default Nav;
//# sourceMappingURL=Nav.jsx.map