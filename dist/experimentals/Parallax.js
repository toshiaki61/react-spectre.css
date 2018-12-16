import React from 'react';
var Parallax = function (_a) {
    var src = _a.src, alt = _a.alt, title = _a.title;
    return (React.createElement("div", { className: "parallax" },
        React.createElement("div", { className: "parallax-top-left" }),
        React.createElement("div", { className: "parallax-top-right" }),
        React.createElement("div", { className: "parallax-bottom-left" }),
        React.createElement("div", { className: "parallax-bottom-right" }),
        React.createElement("div", { className: "parallax-content" },
            React.createElement("div", { className: "parallax-front" },
                React.createElement("h2", null, title)),
            React.createElement("div", { className: "parallax-back" },
                React.createElement("img", { src: src, className: "img-responsive rounded", alt: alt })))));
};
Parallax.defaultProps = {};
export default Parallax;
//# sourceMappingURL=Parallax.js.map