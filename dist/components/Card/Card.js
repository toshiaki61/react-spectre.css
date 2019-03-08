import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardSubtitle from './CardSubtitle';
import CardTitle from './CardTitle';
import { hasCardChildren, isCardItemHeader } from './util';
function renderCard(p) {
    if (hasCardChildren(p)) {
        return p.children;
    }
    return p.items.map(function (item) {
        if (item.type === 'header' && isCardItemHeader(item.content)) {
            var _a = item.content, button = _a.button, title = _a.title, subtitle = _a.subtitle;
            return (React.createElement(CardHeader, { key: item.id },
                button,
                title ? React.createElement(CardTitle, { className: "h5" }, title) : null,
                subtitle ? (React.createElement(CardSubtitle, { className: "text-gray" }, subtitle)) : null));
        }
        switch (item.type) {
            case 'image':
                return React.createElement(CardImage, null, item.content);
            case 'footer':
                return React.createElement(CardFooter, null, item.content);
            case 'body':
            default:
                return React.createElement(CardBody, null, item.content);
        }
    });
}
var Card = function (p) {
    var children = p.children, className = p.className, rest = tslib_1.__rest(p, ["children", "className"]);
    return (React.createElement("div", tslib_1.__assign({ className: cx('card', className) }, rest), renderCard(p)));
};
export default Card;
//# sourceMappingURL=Card.js.map