import * as tslib_1 from "tslib";
import React from 'react';
import { attr } from 'utilities/attr';
var Loading = function (_a) {
    var large = _a.large, className = _a.className, rest = tslib_1.__rest(_a, ["large", "className"]);
    return (React.createElement("div", tslib_1.__assign({}, attr({ loading: true, loadingSize: large ? 'lg' : undefined, className: className }), rest)));
};
Loading.defaultProps = {
    large: false,
    className: '',
};
export default Loading;
//# sourceMappingURL=Loading.js.map