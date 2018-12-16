import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
var Table = function (_a) {
    var header = _a.header, contents = _a.contents, className = _a.className, striped = _a.striped, hover = _a.hover, props = tslib_1.__rest(_a, ["header", "contents", "className", "striped", "hover"]);
    var classes = classnames('table', {
        'table-striped': striped,
        'table-hover': hover,
    }, className);
    return (React.createElement("table", tslib_1.__assign({ className: classes }, props),
        React.createElement("thead", null,
            React.createElement("tr", null, header.map(function (row, i) {
                var key = "header-" + i;
                return React.createElement("th", { key: key }, row);
            }))),
        React.createElement("tbody", null, contents.map(function (content, i) {
            var rowKey = "row-" + i;
            return (React.createElement("tr", { key: rowKey }, content.map(function (column, j) {
                var columnKey = "column-" + j;
                return React.createElement("td", { key: columnKey }, column);
            })));
        }))));
};
Table.defaultProps = {
    className: '',
    striped: false,
    hover: false,
};
export default Table;
//# sourceMappingURL=Table.js.map