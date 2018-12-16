import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
import Container from './Container';
var ColumnsWithoutContainer = function (_a) {
    var children = _a.children, gapless = _a.gapless, oneline = _a.oneline, className = _a.className, props = tslib_1.__rest(_a, ["children", "gapless", "oneline", "className"]);
    var classes = classnames('columns', {
        'col-gapless': gapless,
        'col-oneline': oneline,
    }, className);
    return (React.createElement("div", tslib_1.__assign({ className: classes }, props), children));
};
ColumnsWithoutContainer.defaultProps = {
    className: '',
    gapless: false,
    oneline: false,
};
export function acquireContainerProps(option) {
    var _a;
    switch (typeof option) {
        case 'boolean':
            return null;
        case 'string':
            return _a = {}, _a[option] = true, _a;
        default:
            return option;
    }
}
var Columns = function (_a) {
    var children = _a.children, container = _a.container, props = tslib_1.__rest(_a, ["children", "container"]);
    var content = (React.createElement(ColumnsWithoutContainer, tslib_1.__assign({}, props), children));
    if (!container) {
        return content;
    }
    var containerProps = acquireContainerProps(container);
    return React.createElement(Container, tslib_1.__assign({}, containerProps), content);
};
Columns.defaultProps = {
    container: false,
};
export default Columns;
//# sourceMappingURL=Columns.js.map