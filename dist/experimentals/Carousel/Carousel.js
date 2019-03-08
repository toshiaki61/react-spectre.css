import * as tslib_1 from "tslib";
import React, { Fragment } from 'react';
import { hasCarouselChildren } from './util';
import CarouselContainer from './CarouselContainer';
import CarouselItem from './CarouselItem';
import CarouselLocator from './CarouselLocator';
import CarouselNav from './CarouselNav';
import CarouselNavItem from './CarouselNavItem';
function renderCarousel(p) {
    if (hasCarouselChildren(p)) {
        return p.children;
    }
    var slides = p.slides, activeId = p.activeId, onChange = p.onChange;
    return (React.createElement(Fragment, null,
        slides.map(function (slide, i) {
            var id = "slide-" + i;
            var checked = activeId ? activeId === id : i === 0;
            var handleChange = 
            // useCallback(
            function (e) { return onChange(e, id); };
            // ,[id])
            return (React.createElement(CarouselLocator, { key: id + "_locator", id: id, checked: checked, onChange: handleChange }));
        }),
        React.createElement(CarouselContainer, null, slides.map(function (slide, i) { return (React.createElement(CarouselItem, tslib_1.__assign({ key: "slide-" + i + "_item", prev: i === 0 ? slides.length - 1 : i - 1, next: i === slides.length - 1 ? 0 : i + 1 }, slide))); })),
        React.createElement(CarouselNav, null, slides.map(function (slide, i) {
            var id = "slide-" + i;
            return (React.createElement(CarouselNavItem, { key: id + "_nav", id: id }, i + 1));
        }))));
}
var Carousel = function (p) { return (React.createElement("div", { className: "carousel" }, renderCarousel(p))); };
Carousel.defaultProps = {
    activeId: 'slide-0',
};
export default Carousel;
//# sourceMappingURL=Carousel.js.map