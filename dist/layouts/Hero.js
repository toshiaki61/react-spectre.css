import classnames from 'classnames';
import React, { Fragment } from 'react';
var Hero = function (_a) {
    var children = _a.children, title = _a.title, content = _a.content, gray = _a.gray, primary = _a.primary;
    var className = classnames('hero', { 'bg-gray': gray, 'bg-primary': primary });
    return (React.createElement("div", { className: className },
        React.createElement("div", { className: "hero-body" }, children ? (children) : (React.createElement(Fragment, null,
            React.createElement("h1", null, title),
            React.createElement("p", null, content))))));
};
export default Hero;
//# sourceMappingURL=Hero.js.map