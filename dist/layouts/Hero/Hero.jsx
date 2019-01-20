import React from 'react';
import cx from 'classnames';
import { hasHeroChildren } from './util';
import HeroBody from './HeroBody';
function renderHero(p) {
    if (hasHeroChildren(p)) {
        return p.children;
    }
    var title = p.title, content = p.content;
    return (<HeroBody>
      <h1>{title}</h1>
      <p>{content}</p>
    </HeroBody>);
}
var Hero = function (p) {
    var _a;
    return (<div className={cx('hero', p.className, (_a = {}, _a["hero-" + p.size] = p.size, _a))} style={p.style}>
    {renderHero(p)}
  </div>);
};
export default Hero;
//# sourceMappingURL=Hero.jsx.map