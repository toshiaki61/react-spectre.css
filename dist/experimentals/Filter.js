import React from 'react';
var Filter = function (_a) {
    var tags = _a.tags, data = _a.data, active = _a.active, onChange = _a.onChange;
    return (React.createElement("div", { className: "filter" },
        Object.keys(tags).map(function (key) {
            var handleChange = function (e) { return onChange(e, key); };
            return (React.createElement("input", { key: key + "_input", id: key, className: "filter-tag", name: "filter-radio", checked: key === active, type: "radio", hidden: true, onChange: handleChange }));
        }),
        React.createElement("div", { className: "filter-nav" }, Object.keys(tags).map(function (key) { return (React.createElement("label", { key: key + "_nav", className: "chip", htmlFor: key }, tags[key])); })),
        React.createElement("div", { className: "filter-body columns" }, data.map(function (_a, i) {
            var tag = _a.tag, title = _a.title, subtitle = _a.subtitle;
            var key = "card_" + i;
            return (React.createElement("div", { key: key, className: "column col-4 filter-item", "data-tag": tag },
                React.createElement("div", { className: "card", style: { marginBottom: '0.4rem' } },
                    React.createElement("div", { className: "card-header" },
                        React.createElement("div", { className: "card-title" }, title),
                        React.createElement("div", { className: "card-subtitle" }, subtitle)))));
        }))));
};
export default Filter;
//# sourceMappingURL=Filter.js.map