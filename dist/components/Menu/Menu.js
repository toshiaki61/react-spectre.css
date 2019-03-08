import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
import { hasMenuChildren } from './util';
import MenuItem from './MenuItem';
function renderMenu(p) {
    if (hasMenuChildren(p)) {
        return p.children;
    }
    return p.contents.map(function (content, i) { return (React.createElement(MenuItem, tslib_1.__assign({ key: content.id }, content, { onClick: content.onClick || p.onClick }))); });
}
var Menu = function (p) {
    var className = p.className, nav = p.nav, onClick = p.onClick, children = p.children, rest = tslib_1.__rest(p, ["className", "nav", "onClick", "children"]);
    var ulProps = Object.keys(rest)
        .filter(function (r) { return r !== 'header'; })
        .reduce(function (memo, r) {
        var _a;
        return (tslib_1.__assign({}, memo, (_a = {}, _a[r] = rest[r], _a)));
    }, {});
    return (React.createElement("ul", tslib_1.__assign({ className: cx('menu', {
            'menu-nav': nav,
        }, className) }, ulProps), renderMenu(p)));
};
export default Menu;
//# sourceMappingURL=Menu.js.map