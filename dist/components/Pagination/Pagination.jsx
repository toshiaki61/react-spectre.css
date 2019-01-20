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
        return (<Fragment>
        <PaginationTitleItem title={title.prev.title} subtitle={title.prev.subtitle} current={current} value={current - 1} onClick={onClick}/>
        <PaginationTitleItem title={title.next.title} subtitle={title.next.subtitle} current={current} value={current + 1} onClick={onClick}/>
      </Fragment>);
    }
    var label = p.label, total = p.total, each = p.each;
    var safeLabel = label ? label : { skip: null, previous: null, next: null };
    var list = pages(current, total, each, safeLabel.skip);
    return (<Fragment>
      <PaginationItem current={current} label={safeLabel.previous} disabled={current === 1} value={current - 1} onClick={onClick}/>
      {list.map(function (row, i) {
        var key = "paging-" + i;
        return (<PaginationItem key={key} {...row} current={current} disabled={!row.value} onClick={onClick}/>);
    })}
      <PaginationItem current={current} label={safeLabel.next} disabled={current === total} value={current + 1} onClick={onClick}/>
    </Fragment>);
}
var Pagination = function (p) {
    return <ul className="pagination">{renderPagination(p)}</ul>;
};
Pagination.defaultProps = {
    label: { previous: 'Previous', next: 'Next', skip: '...' },
    total: 1,
    current: 1,
    each: 1,
};
export default Pagination;
//# sourceMappingURL=Pagination.jsx.map