import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import { Carousel } from '@experimentals/Carousel';
var CarouselExample = /** @class */ (function (_super) {
    tslib_1.__extends(CarouselExample, _super);
    function CarouselExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            active: 'slide-0',
        };
        _this.onChange = function (e, id) {
            return _this.setState({ active: id });
        };
        return _this;
    }
    CarouselExample.prototype.render = function () {
        var slides = this.props.slides;
        if (!slides || slides.length === 0) {
            return null;
        }
        var active = this.state.active;
        return (<Carousel slides={slides} activeId={active} onChange={this.onChange}/>);
    };
    CarouselExample.defaultProps = {
        slides: [
            {
                src: '//picturepan2.github.io/spectre/img/osx-yosemite.jpg',
                alt: 'macOS Yosemite Wallpaper',
            },
            {
                src: '//picturepan2.github.io/spectre/img/osx-yosemite-2.jpg',
                alt: 'macOS Yosemite Wallpaper',
            },
            {
                src: '//picturepan2.github.io/spectre/img/osx-el-capitan.jpg',
                alt: 'macOS Yosemite Wallpaper',
            },
            {
                src: '//picturepan2.github.io/spectre/img/osx-el-capitan-2.jpg',
                alt: 'macOS Yosemite Wallpaper',
            },
        ],
    };
    return CarouselExample;
}(Component));
export default CarouselExample;
//# sourceMappingURL=Carousel.jsx.map