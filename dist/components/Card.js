import * as tslib_1 from "tslib";
import React from 'react';
var Item = function (_a) {
    var type = _a.type, content = _a.content;
    switch (type) {
        case 'image':
            return React.createElement("div", { className: "card-image" }, content);
        case 'body':
            return React.createElement("div", { className: "card-body" }, content);
        case 'footer':
        default:
            return React.createElement("div", { className: "card-footer" }, content);
    }
};
Item.defaultProps = {
    type: '',
    content: null,
};
var Card = function (_a) {
    var items = _a.items;
    return (React.createElement("div", { className: "card" }, items.map(function (item, i) {
        var key = "card-" + i;
        if (item.type === 'header') {
            return (React.createElement("div", { key: key, className: "card-header" },
                item.content.button,
                item.content.title ? (React.createElement("div", { className: "card-title h5" }, item.content.title)) : null,
                item.content.subtitle ? (React.createElement("div", { className: "card-subtitle text-gray" }, item.content.subtitle)) : null));
        }
        return React.createElement(Item, tslib_1.__assign({ key: key }, item));
    })));
};
export default Card;
//# sourceMappingURL=Card.js.map