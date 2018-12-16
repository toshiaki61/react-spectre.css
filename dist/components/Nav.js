import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
import Button from '../elements/Button';
import noop from '../utilities/noop';
var Item = function (_a) {
    var id = _a.id, name = _a.name, items = _a.items, active = _a.active, onClick = _a.onClick;
    var handleButtonClick = onClick
        ? function (e) { return onClick(e, id); }
        : noop;
    return (React.createElement("li", { className: classnames('nav-item', { active: active }) },
        React.createElement(Button, { href: "#", onClick: handleButtonClick }, name),
        items && items.length ? React.createElement(Nav, { items: items, onClick: onClick }) : null));
};
Item.defaultProps = {
    active: false,
};
var Nav = function (_a) {
    var items = _a.items, active = _a.active, onClick = _a.onClick;
    return (React.createElement("ul", { className: "nav" }, items.map(function (item) { return (React.createElement(Item, tslib_1.__assign({ key: item.id }, item, { active: active === item.id, onClick: onClick }))); })));
};
Nav.defaultProps = {
    active: '',
    onClick: noop,
};
export default Nav;
//# sourceMappingURL=Nav.js.map