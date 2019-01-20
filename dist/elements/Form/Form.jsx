import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
var Form = function (_a) {
    var children = _a.children, className = _a.className, horizontal = _a.horizontal, rest = tslib_1.__rest(_a, ["children", "className", "horizontal"]);
    return (<form {...rest} className={cx(className, { 'form-horizontal': horizontal })}>
    {children}
  </form>);
};
export default Form;
//# sourceMappingURL=Form.jsx.map