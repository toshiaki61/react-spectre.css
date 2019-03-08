import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
import { hasNavChildren } from './util';
import NavItem from './NavItem';
function renderNav(p) {
    if (hasNavChildren(p)) {
        return p.children;
    }
    var items = p.items, activeId = p.activeId, onClick = p.onClick;
    return items.map(function (item) { return (React.createElement(NavItem, tslib_1.__assign({ key: item.id }, item, { active: activeId === item.id, onClick: onClick }))); });
}
var Nav = function (p) { return (React.createElement("ul", { className: cx('nav', p.className) }, renderNav(p))); };
export default Nav;
//# sourceMappingURL=Nav.js.map