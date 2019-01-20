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
    return (<Fragment>
      <ViewerSlider {...slider}/>
      <ViewerImage image={image}/>
    </Fragment>);
}
var Viewer360 = function (p) { return (<div className={cx('viewer-360', p.className)}>{renderViewer360(p)}</div>); };
export default Viewer360;
//# sourceMappingURL=Viewer360.jsx.map