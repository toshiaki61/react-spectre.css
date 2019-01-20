import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
import ButtonWrapper from './ButtonWrapper';
var Button = function (_a) {
    var children = _a.children, className = _a.className, size = _a.size, color = _a.color, loading = _a.loading, circle = _a.circle, blockButton = _a.blockButton, inputGroup = _a.inputGroup, clearButton = _a.clearButton, actionButton = _a.actionButton, rest = tslib_1.__rest(_a, ["children", "className", "size", "color", "loading", "circle", "blockButton", "inputGroup", "clearButton", "actionButton"]);
    var _b;
    return (<ButtonWrapper className={cx('btn', (_b = {
            loading: loading,
            circle: circle
        },
        _b["btn-" + size] = size,
        _b["btn-" + color] = color,
        _b['input-group-btn'] = inputGroup,
        _b['btn-action'] = actionButton,
        _b['btn-block'] = blockButton,
        _b['btn-clear'] = clearButton,
        _b), className)} {...rest}>
    {children}
  </ButtonWrapper>);
};
export default Button;
//# sourceMappingURL=Button.jsx.map