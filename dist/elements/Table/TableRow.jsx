import React from 'react';
import cx from 'classnames';
var TableRow = function (_a) {
    var className = _a.className, children = _a.children, onClick = _a.onClick;
    return (<tr onClick={onClick} className={cx(className)}>
    {children}
  </tr>);
};
export default TableRow;
//# sourceMappingURL=TableRow.jsx.map