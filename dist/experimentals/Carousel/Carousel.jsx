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
    return (<Fragment>
      {slides.map(function (slide, i) {
        var id = "slide-" + i;
        var checked = activeId ? activeId === id : i === 0;
        var handleChange = 
        // useCallback(
        function (e) { return onChange(e, id); };
        // ,[id])
        return (<CarouselLocator key={id + "_locator"} id={id} checked={checked} onChange={handleChange}/>);
    })}
      <CarouselContainer>
        {slides.map(function (slide, i) { return (<CarouselItem key={"slide-" + i + "_item"} prev={i === 0 ? slides.length - 1 : i - 1} next={i === slides.length - 1 ? 0 : i + 1} {...slide}/>); })}
      </CarouselContainer>
      <CarouselNav>
        {slides.map(function (slide, i) {
        var id = "slide-" + i;
        return (<CarouselNavItem key={id + "_nav"} id={id}>
              {i + 1}
            </CarouselNavItem>);
    })}
      </CarouselNav>
    </Fragment>);
}
var Carousel = function (p) { return (<div className="carousel">{renderCarousel(p)}</div>); };
Carousel.defaultProps = {
    activeId: 'slide-0',
};
export default Carousel;
//# sourceMappingURL=Carousel.jsx.map