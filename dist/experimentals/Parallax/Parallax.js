import React, { Fragment } from 'react';
import { hasParallaxChildren } from './util';
import ParallaxBack from './ParallaxBack';
import ParallaxBottomLeft from './ParallaxBottomLeft';
import ParallaxBottomRight from './ParallaxBottomRight';
import ParallaxContent from './ParallaxContent';
import ParallaxFront from './ParallaxFront';
import ParallaxTopLeft from './ParallaxTopLeft';
import ParallaxTopRight from './ParallaxTopRight';
function renderParallax(p) {
    if (hasParallaxChildren(p)) {
        return p.children;
    }
    var src = p.src, alt = p.alt, title = p.title;
    return (React.createElement(Fragment, null,
        React.createElement(ParallaxTopLeft, null),
        React.createElement(ParallaxTopRight, null),
        React.createElement(ParallaxBottomLeft, null),
        React.createElement(ParallaxBottomRight, null),
        React.createElement(ParallaxContent, null,
            React.createElement(ParallaxFront, null,
                React.createElement("h2", null, title)),
            React.createElement(ParallaxBack, null,
                React.createElement("img", { src: src, className: "img-responsive rounded", alt: alt || title })))));
}
var Parallax = function (p) { return (React.createElement("div", { className: "parallax" }, renderParallax(p))); };
export default Parallax;
//# sourceMappingURL=Parallax.js.map