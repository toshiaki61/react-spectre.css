import React from 'react';
import { Icon } from '@elements/Icon';
var CarouselItem = function (_a) {
    var src = _a.src, alt = _a.alt, prev = _a.prev, next = _a.next;
    return (React.createElement("figure", { className: "carousel-item" },
        React.createElement("label", { className: "item-prev btn btn-action btn-lg", htmlFor: "slide-" + prev },
            React.createElement(Icon, { type: "arrow-left" })),
        React.createElement("label", { className: "item-next btn btn-action btn-lg", htmlFor: "slide-" + next },
            React.createElement(Icon, { type: "arrow-right" })),
        React.createElement("img", { src: src, className: "img-responsive rounded", alt: alt })));
};
export default CarouselItem;
//# sourceMappingURL=CarouselItem.js.map