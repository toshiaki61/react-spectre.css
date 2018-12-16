import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
import uniqueId from '../elements/form/uniqueId';
import Icon from '../elements/Icon';
import position from '../utilities/position';
import Menu from './Menu';
var Item = function (_a) {
    var contents = _a.contents, className = _a.className, exclusive = _a.exclusive, useIcon = _a.useIcon, header = _a.header;
    var classes = classnames('accordion-item', className);
    var id = uniqueId('accordion-item');
    var type = exclusive ? 'radio' : 'checkbox';
    var inputProps = { id: id, type: type, name: "accordion-" + type };
    var icon = useIcon ? (React.createElement(Icon, { className: position({ marginRight: true }), arrowRight: true })) : null;
    return (React.createElement("div", { className: classes },
        React.createElement("input", tslib_1.__assign({}, inputProps, { id: id, hidden: true })),
        React.createElement("label", { className: "accordion-header", htmlFor: id },
            icon,
            header),
        React.createElement("div", { className: "accordion-body" },
            React.createElement(Menu, { nav: true, contents: contents }))));
};
Item.defaultProps = {
    className: '',
    exclusive: false,
    useIcon: false,
};
var Accordion = function (_a) {
    var menus = _a.menus, className = _a.className, exclusive = _a.exclusive, useIcon = _a.useIcon;
    var classes = classnames('accordion', className);
    return (React.createElement("div", { className: classes }, menus.map(function (_a, i) {
        var header = _a.header, contents = _a.contents, menu = tslib_1.__rest(_a, ["header", "contents"]);
        var key = "accordion_" + i;
        return (React.createElement(Item, tslib_1.__assign({ key: key, exclusive: exclusive, useIcon: useIcon, header: header, contents: contents }, menu)));
    })));
};
Accordion.defaultProps = {
    className: '',
    exclusive: false,
    useIcon: false,
};
export default Accordion;
//# sourceMappingURL=Accordion.js.map