import React from 'react';
import cx from 'classnames';
import { Button } from '@elements/Button';
import BarItem from './BarItem';
import { attr } from '@utils/attr';
var Bar = function (_a) {
    var className = _a.className, small = _a.small, slider = _a.slider, items = _a.items;
    return (<div className={cx('bar', {
        'bar-sm': small,
        'bar-slider': slider,
    }, className)}>
    {items.map(function (item, i) {
        var key = "bar-item-" + i;
        if (slider) {
            var value = item.value + "%";
            Object.assign(item, {
                role: 'progressbar',
                style: { width: value },
                content: (<Button {...attr({
                    className: 'bar-slider-btn',
                    tooltip: value,
                })}/>),
            });
        }
        return <BarItem key={key} small={small} {...item}/>;
    })}
  </div>);
};
Bar.defaultProps = {
    className: '',
    small: false,
    slider: false,
};
export default Bar;
//# sourceMappingURL=Bar.jsx.map