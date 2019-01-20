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
            return (<CardHeader key={item.id}>
          {button}
          {title ? <CardTitle className="h5">{title}</CardTitle> : null}
          {subtitle ? (<CardSubtitle className="text-gray">{subtitle}</CardSubtitle>) : null}
        </CardHeader>);
        }
        switch (item.type) {
            case 'image':
                return <CardImage>{item.content}</CardImage>;
            case 'footer':
                return <CardFooter>{item.content}</CardFooter>;
            case 'body':
            default:
                return <CardBody>{item.content}</CardBody>;
        }
    });
}
var Card = function (p) {
    var children = p.children, className = p.className, rest = tslib_1.__rest(p, ["children", "className"]);
    return (<div className={cx('card', className)} {...rest}>
      {renderCard(p)}
    </div>);
};
export default Card;
//# sourceMappingURL=Card.jsx.map