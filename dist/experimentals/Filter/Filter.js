import * as tslib_1 from "tslib";
import React, { Fragment } from 'react';
import { Card, CardHeader, CardSubtitle, CardTitle, Chip } from 'components/index';
import { hasFilterChildren } from './util';
import FilterBody from './FilterBody';
import FilterItem from './FilterItem';
import FilterNav from './FilterNav';
import FilterTag from './FilterTag';
function renderFilter(p) {
    if (hasFilterChildren(p)) {
        return p.children;
    }
    var tags = p.tags, data = p.data, activeId = p.activeId, onChange = p.onChange;
    return (React.createElement(Fragment, null,
        Object.keys(tags).map(function (key, i) {
            var handleChange = 
            // useCallback(
            function (e) { return onChange(e, key); };
            // ,[key])
            var checked = activeId ? activeId === key : i === 0;
            return (React.createElement(FilterTag, { key: key + "_input", id: key, checked: checked, onChange: handleChange }));
        }),
        React.createElement(FilterNav, null, Object.keys(tags).map(function (key) { return (React.createElement(Chip, { key: key + "_nav", htmlFor: key }, tags[key])); })),
        React.createElement(FilterBody, null, data &&
            data.map(function (_a, i) {
                var tag = _a.tag, title = _a.title, subtitle = _a.subtitle, style = _a.style;
                var key = "card_" + i;
                return (React.createElement(FilterItem, { key: key, "data-tag": tag, style: { padding: '0.4rem' } },
                    React.createElement(Card, { style: tslib_1.__assign({}, style, { marginBottom: '0.4rem' }) },
                        React.createElement(CardHeader, null,
                            React.createElement(CardTitle, { className: "text-bold" }, title),
                            React.createElement(CardSubtitle, { className: "text-gray" }, subtitle)))));
            }))));
}
var Filter = function (p) { return (React.createElement("div", { className: "filter" }, renderFilter(p))); };
export default Filter;
//# sourceMappingURL=Filter.js.map