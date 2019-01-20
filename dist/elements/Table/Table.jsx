import * as tslib_1 from "tslib";
import React, { Fragment } from 'react';
import cx from 'classnames';
import { isTableCloumn } from './util';
import Body from './TableBody';
import Data from './TableData';
import Header from './TableHeader';
import Heading from './TableHeading';
import Row from './TableRow';
function renderTableHeader(_a) {
    var header = _a.header, columns = _a.columns;
    return (header &&
        columns && (<Header>
        <Row>
          {columns.map(function (column, i) {
        var reactKey = "row-" + i + "-key-" + i;
        if (isTableCloumn(column)) {
            var _a = column.headingProps, headingProps = _a === void 0 ? {} : _a;
            return (<Heading key={reactKey} {...headingProps}>
                  {column.children}
                </Heading>);
        }
        return <Heading key={reactKey}>{column}</Heading>;
    })}
        </Row>
      </Header>));
}
function renderTableBody(_a) {
    var columns = _a.columns, data = _a.data, onRowClick = _a.onRowClick;
    return (columns &&
        data && (<Body>
        {data.map(function (datum, i) { return (<Row key={"row-" + i} onClick={onRowClick && (function () { return onRowClick(datum); })}>
            {columns.map(function (column, k) {
        if (isTableCloumn(column)) {
            var cellData = datum[column.key];
            var decorator = column.dataCellDecorator;
            var key = "row-" + i + "-key-" + k;
            return decorator ? (decorator(cellData, key, datum)) : (<Data key={key}>{cellData}</Data>);
        }
        return <Data key={"row-" + i + "-key-" + k}>{datum[column]}</Data>;
    })}
          </Row>); })}
      </Body>));
}
function renderTableContent(_a) {
    var columns = _a.columns, data = _a.data, header = _a.header, onRowClick = _a.onRowClick;
    return (<Fragment>
      {renderTableHeader({ header: header, columns: columns })}
      {renderTableBody({ columns: columns, data: data, onRowClick: onRowClick })}
    </Fragment>);
}
function Table(_a) {
    var data = _a.data, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.striped, striped = _c === void 0 ? true : _c, _d = _a.hover, hover = _d === void 0 ? true : _d, _e = _a.scroll, scroll = _e === void 0 ? false : _e, children = _a.children, rest = tslib_1.__rest(_a, ["data", "className", "striped", "hover", "scroll", "children"]);
    return (<table className={cx('table', {
        'table-striped': striped,
        'table-hover': hover,
        'table-scroll': scroll,
    }, className)}>
      {data ? renderTableContent(tslib_1.__assign({}, rest, { data: data })) : children}
    </table>);
}
Table.defaultProps = {
    className: '',
    hover: true,
    striped: true,
    scroll: false,
    header: true,
};
export default Table;
//# sourceMappingURL=Table.jsx.map