import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
import Button from '../elements/Button';
var Item = function (_a) {
    var small = _a.small, tooltip = _a.tooltip, content = _a.content, props = tslib_1.__rest(_a, ["small", "tooltip", "content"]);
    var classes = classnames('bar-item', { tooltip: tooltip });
    return (React.createElement("div", tslib_1.__assign({ className: classes, "data-tooltip": tooltip }, props), small ? null : content));
};
Item.defaultProps = {
    small: false,
    tooltip: '',
    content: '',
};
var Bar = function (_a) {
    var className = _a.className, small = _a.small, slider = _a.slider, items = _a.items;
    var classes = classnames('bar', {
        'bar-sm': small,
        'bar-slider': slider,
    }, className);
    return (React.createElement("div", { className: classes }, items.map(function (item, i) {
        var key = "bar-item-" + i;
        if (slider) {
            var value = item.value + "%";
            Object.assign(item, {
                role: 'progressbar',
                style: { width: value },
                content: (React.createElement(Button, { className: "bar-slider-btn tooltip", "data-tooltip": value })),
            });
        }
        return React.createElement(Item, tslib_1.__assign({ key: key, small: small }, item));
    })));
};
Bar.defaultProps = {
    className: '',
    small: false,
    slider: false,
};
export default Bar;
//# sourceMappingURL=Bar.js.map