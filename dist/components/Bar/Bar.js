import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
import { Button } from '@elements/Button';
import BarItem from './BarItem';
import { attr } from '@utils/attr';
var Bar = function (_a) {
    var className = _a.className, small = _a.small, slider = _a.slider, items = _a.items;
    return (React.createElement("div", { className: cx('bar', {
            'bar-sm': small,
            'bar-slider': slider,
        }, className) }, items.map(function (item, i) {
        var key = "bar-item-" + i;
        if (slider) {
            var value = item.value + "%";
            Object.assign(item, {
                role: 'progressbar',
                style: { width: value },
                content: (React.createElement(Button, tslib_1.__assign({}, attr({
                    className: 'bar-slider-btn',
                    tooltip: value,
                })))),
            });
        }
        return React.createElement(BarItem, tslib_1.__assign({ key: key, small: small }, item));
    })));
};
Bar.defaultProps = {
    className: '',
    small: false,
    slider: false,
};
export default Bar;
//# sourceMappingURL=Bar.js.map