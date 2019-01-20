import React from 'react';
import { Icon } from '@elements/Icon';
var CarouselItem = function (_a) {
    var src = _a.src, alt = _a.alt, prev = _a.prev, next = _a.next;
    return (<figure className="carousel-item">
    <label className="item-prev btn btn-action btn-lg" htmlFor={"slide-" + prev}>
      <Icon type="arrow-left"/>
    </label>
    <label className="item-next btn btn-action btn-lg" htmlFor={"slide-" + next}>
      <Icon type="arrow-right"/>
    </label>
    <img src={src} className="img-responsive rounded" alt={alt}/>
  </figure>);
};
export default CarouselItem;
//# sourceMappingURL=CarouselItem.jsx.map