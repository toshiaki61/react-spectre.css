import classnames from 'classnames';
import React from 'react';
var Loading = function (_a) {
    var large = _a.large, className = _a.className;
    var classes = classnames('loading', {
        'loading-lg': large,
    }, className);
    return React.createElement("div", { className: classes });
};
Loading.defaultProps = {
    large: false,
    className: '',
};
export default Loading;
//# sourceMappingURL=Loading.js.map