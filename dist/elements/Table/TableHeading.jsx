import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
import { TableSortDirection } from './interfaces';
import { Button } from '@elements/Button';
import { Icon } from '@elements/Icon';
var TableHeading = function (_a) {
    var className = _a.className, children = _a.children, onClick = _a.onClick, sortDirection = _a.sortDirection, rest = tslib_1.__rest(_a, ["className", "children", "onClick", "sortDirection"]);
    return (<th className={cx(className)} onClick={onClick} {...rest}>
    {children}
    {sortDirection && (<Button color="link" size="sm">
        <Icon type={sortDirection === TableSortDirection.ASC ? 'arrow-up' : 'arrow-down'}/>
      </Button>)}
  </th>);
};
export default TableHeading;
//# sourceMappingURL=TableHeading.jsx.map