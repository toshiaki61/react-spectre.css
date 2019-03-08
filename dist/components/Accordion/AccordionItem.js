import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
import { Icon } from 'elements/Icon';
import { attr } from 'utilities/attr';
import AccordionBody from './AccordionBody';
var AccordionItem = function (p) {
    var id = p.id, header = p.header, className = p.className, exclusive = p.exclusive, useIcon = p.useIcon;
    var type = exclusive ? 'radio' : 'checkbox';
    var inputProps = { id: id, type: type, name: "accordion-" + type };
    var icon = useIcon ? (React.createElement(Icon, tslib_1.__assign({}, attr({ marginRight: true }), { type: "arrow-right" }))) : null;
    return (React.createElement("div", { className: cx('accordion-item', className) },
        React.createElement("input", tslib_1.__assign({}, inputProps, { id: id, hidden: true })),
        React.createElement("label", { className: "accordion-header", htmlFor: id },
            icon,
            header),
        React.createElement("div", { className: "accordion-body" },
            React.createElement(AccordionBody, tslib_1.__assign({}, p)))));
};
AccordionItem.defaultProps = {
    className: '',
    exclusive: false,
    useIcon: false,
};
export default AccordionItem;
//# sourceMappingURL=AccordionItem.js.map