import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
import noop from '../utilities/noop';
var sharp = '#';
function calculateStartAndEnd(current, total, each) {
    if (total <= 2 * each + 5) {
        return { start: 1, end: total };
    }
    if (current <= each + 3) {
        return { start: 1, end: 2 * each + 3 };
    }
    if (current >= total - (each + 2)) {
        return { start: total - 2 * each - 2, end: total };
    }
    return { start: current - each, end: current + each };
}
function pages(current, total, each, skip) {
    if (each === void 0) { each = 1; }
    if (skip === void 0) { skip = '...'; }
    var page = calculateStartAndEnd(current, total, each);
    var result = [];
    if (page.start > 1) {
        result.push({ label: '1', value: 1 });
    }
    if (page.start > 2) {
        result.push({ label: skip, value: 0 });
    }
    for (var i = page.start; i <= page.end; i += 1) {
        result.push({ label: "" + i, value: i });
    }
    if (page.end < total - 1) {
        result.push({ label: skip, value: 0 });
    }
    if (page.end < total) {
        result.push({ label: "" + total, value: total });
    }
    return result;
}
var Item = function (_a) {
    var current = _a.current, value = _a.value, label = _a.label, disabled = _a.disabled, onClick = _a.onClick;
    var classes = classnames('page-item', {
        disabled: disabled,
        active: value === current,
    });
    var linkProp = {};
    if (disabled) {
        linkProp.tabIndex = -1;
    }
    var handleLinkClick = onClick
        ? function (e) { return onClick(e, value); }
        : noop;
    return (React.createElement("li", { className: classes },
        React.createElement("a", tslib_1.__assign({ href: sharp }, linkProp, { onClick: handleLinkClick }), label)));
};
Item.defaultProps = {
    disabled: false,
};
var Title = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, current = _a.current, value = _a.value, onClick = _a.onClick;
    var classes = classnames('page-item', {
        'page-prev': current > value,
        'page-next': current < value,
    });
    var handleLinkClick = function (e) { return onClick(e, value); };
    return (React.createElement("li", { className: classes },
        React.createElement("a", { href: sharp, onClick: handleLinkClick },
            React.createElement("div", { className: "page-item-subtitle" }, subtitle),
            React.createElement("div", { className: "page-item-title h5" }, title))));
};
var Pagination = function (_a) {
    var label = _a.label, current = _a.current, total = _a.total, each = _a.each, title = _a.title, onClick = _a.onClick;
    if (title) {
        return (React.createElement("ul", { className: "pagination" },
            React.createElement(Title, { title: title.prev.title, subtitle: title.prev.subtitle, current: current, value: current - 1, onClick: onClick || noop }),
            React.createElement(Title, { title: title.next.title, subtitle: title.next.subtitle, current: current, value: current + 1, onClick: onClick || noop })));
    }
    var safeLabel = label ? label : { skip: null, previous: null, next: null };
    var list = pages(current, total, each, safeLabel.skip);
    return (React.createElement("ul", { className: "pagination" },
        React.createElement(Item, { current: current, label: safeLabel.previous, disabled: current === 1, value: current - 1, onClick: onClick }),
        list.map(function (row, i) {
            var key = "paging-" + i;
            return (React.createElement(Item, tslib_1.__assign({ key: key }, row, { current: current, disabled: !row.value, onClick: onClick })));
        }),
        React.createElement(Item, { current: current, label: safeLabel.next, disabled: current === total, value: current + 1, onClick: onClick })));
};
Pagination.defaultProps = {
    label: { previous: 'Previous', next: 'Next', skip: '...' },
    total: 1,
    current: 1,
    each: 1,
    title: undefined,
    onClick: noop,
};
export default Pagination;
//# sourceMappingURL=Pagination.js.map