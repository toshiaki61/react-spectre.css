import React from 'react';
import cx from 'classnames';
import { hasHeroChildren } from './util';
import HeroBody from './HeroBody';
function renderHero(p) {
    if (hasHeroChildren(p)) {
        return p.children;
    }
    var title = p.title, content = p.content;
    return (React.createElement(HeroBody, null,
        React.createElement("h1", null, title),
        React.createElement("p", null, content)));
}
var Hero = function (p) {
    var _a;
    return (React.createElement("div", { className: cx('hero', p.className, (_a = {}, _a["hero-" + p.size] = p.size, _a)), style: p.style }, renderHero(p)));
};
export default Hero;
//# sourceMappingURL=Hero.js.map