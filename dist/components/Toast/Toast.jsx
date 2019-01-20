import React, { Fragment } from 'react';
import cx from 'classnames';
import { Button } from '@elements/Button';
import { attr } from '@utils/attr';
import { hasToastChildren } from './util';
function renderToast(p) {
    if (hasToastChildren(p)) {
        return p.children;
    }
    var content = p.content, title = p.title, onClearClick = p.onClearClick;
    var handleClearClick = onClearClick
        ? function (e) {
            e.preventDefault();
            onClearClick(e);
        }
        : null;
    return (<Fragment>
      {handleClearClick ? (<Button clearButton {...attr({ floating: 'right' })} onClick={handleClearClick}/>) : null}
      {title ? <h5>{title}</h5> : null}
      {content}
    </Fragment>);
}
var Toast = function (p) {
    var _a;
    var style = p.style ? { style: p.style } : {};
    return (<div className={cx('toast', p.className, (_a = {},
        _a["toast-" + p.color] = p.color,
        _a))} {...style}>
      {renderToast(p)}
    </div>);
};
export default Toast;
//# sourceMappingURL=Toast.jsx.map