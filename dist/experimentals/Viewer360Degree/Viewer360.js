import * as tslib_1 from "tslib";
import React, { Fragment } from 'react';
import cx from 'classnames';
import { hasViewer360Children } from './util';
import ViewerImage from './ViewerImage';
import ViewerSlider from './ViewerSlider';
function renderViewer360(p) {
    if (hasViewer360Children(p)) {
        return p.children;
    }
    var slider = p.slider, image = p.image;
    return (React.createElement(Fragment, null,
        React.createElement(ViewerSlider, tslib_1.__assign({}, slider)),
        React.createElement(ViewerImage, { image: image })));
}
var Viewer360 = function (p) { return (React.createElement("div", { className: cx('viewer-360', p.className) }, renderViewer360(p))); };
export default Viewer360;
//# sourceMappingURL=Viewer360.js.map