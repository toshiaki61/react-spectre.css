import * as tslib_1 from "tslib";
import React, { Fragment } from 'react';
import { hasPaginationChildren, hasPaginationTitle, pages } from './util';
import PaginationItem from './PaginationItem';
import PaginationTitleItem from './PaginationTitleItem';
function renderPagination(p) {
    if (hasPaginationChildren(p)) {
        return p.children;
    }
    var current = p.current, onClick = p.onClick;
    if (hasPaginationTitle(p)) {
        var title = p.title;
        return (React.createElement(Fragment, null,
            React.createElement(PaginationTitleItem, { title: title.prev.title, subtitle: title.prev.subtitle, current: current, value: current - 1, onClick: onClick }),
            React.createElement(PaginationTitleItem, { title: title.next.title, subtitle: title.next.subtitle, current: current, value: current + 1, onClick: onClick })));
    }
    var label = p.label, total = p.total, each = p.each;
    var safeLabel = label ? label : { skip: null, previous: null, next: null };
    var list = pages(current, total, each, safeLabel.skip);
    return (React.createElement(Fragment, null,
        React.createElement(PaginationItem, { current: current, label: safeLabel.previous, disabled: current === 1, value: current - 1, onClick: onClick }),
        list.map(function (row, i) {
            var key = "paging-" + i;
            return (React.createElement(PaginationItem, tslib_1.__assign({ key: key }, row, { current: current, disabled: !row.value, onClick: onClick })));
        }),
        React.createElement(PaginationItem, { current: current, label: safeLabel.next, disabled: current === total, value: current + 1, onClick: onClick })));
}
var Pagination = function (p) {
    return React.createElement("ul", { className: "pagination" }, renderPagination(p));
};
Pagination.defaultProps = {
    label: { previous: 'Previous', next: 'Next', skip: '...' },
    total: 1,
    current: 1,
    each: 1,
};
export default Pagination;
//# sourceMappingURL=Pagination.js.map