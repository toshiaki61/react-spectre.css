import * as tslib_1 from "tslib";
import React from 'react';
import { attr } from '@utils/attr';
var Loading = function (_a) {
    var large = _a.large, className = _a.className, rest = tslib_1.__rest(_a, ["large", "className"]);
    return (<div {...attr({ loading: true, loadingSize: large ? 'lg' : undefined, className: className })} {...rest}/>);
};
Loading.defaultProps = {
    large: false,
    className: '',
};
export default Loading;
//# sourceMappingURL=Loading.jsx.map