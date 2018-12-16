import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
import Divider from '../utilities/Divider';
import noop from '../utilities/noop';
var Badge = function (_a) {
    var content = _a.content;
    if (!content) {
        return null;
    }
    return (React.createElement("div", { className: "menu-badge" },
        React.createElement("span", { className: "label label-primary" }, content)));
};
Badge.defaultProps = {
    content: '',
};
var Item = function (_a) {
    var id = _a.id, link = _a.link, content = _a.content, className = _a.className, divider = _a.divider, active = _a.active, badge = _a.badge, onClick = _a.onClick, props = tslib_1.__rest(_a, ["id", "link", "content", "className", "divider", "active", "badge", "onClick"]);
    var classes = classnames('menu-item', className);
    if (divider) {
        return (React.createElement(Divider, { className: className, content: typeof divider === 'string' ? divider : '' }));
    }
    if (typeof content !== 'string') {
        return (React.createElement("li", tslib_1.__assign({ className: classes }, props), content));
    }
    var handleItemClick = onClick
        ? function (e) { return onClick(e, id || ''); }
        : noop;
    return (React.createElement("li", tslib_1.__assign({ className: classes }, props),
        React.createElement(Badge, { content: badge }),
        React.createElement("a", { href: link, className: classnames({ active: active }), onClick: handleItemClick }, content)));
};
Item.defaultProps = {
    link: 'javascript:void(0)',
    content: '',
    className: '',
    divider: false,
    active: false,
    badge: 0,
};
var Menu = function (_a) {
    var className = _a.className, nav = _a.nav, contents = _a.contents, onClick = _a.onClick, props = tslib_1.__rest(_a, ["className", "nav", "contents", "onClick"]);
    var classes = classnames('menu', {
        'menu-nav': nav,
    }, className);
    var ulProps = Object.keys(props)
        .filter(function (p) { return p !== 'header'; })
        .reduce(function (memo, p) {
        var _a;
        return Object.assign(memo, (_a = {}, _a[p] = props[p], _a));
    }, {});
    return (React.createElement("ul", tslib_1.__assign({ className: classes }, ulProps), contents.map(function (content, i) {
        var key = content.id || "menu-item_" + i;
        return (React.createElement(Item, tslib_1.__assign({ key: key }, content, { onClick: content.onClick || onClick })));
    })));
};
Menu.defaultProps = {
    className: '',
    nav: false,
};
export default Menu;
//# sourceMappingURL=Menu.js.map