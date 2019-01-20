import * as tslib_1 from "tslib";
import React, { Fragment } from 'react';
import cx from 'classnames';
import PanelBody from './PanelBody';
import PanelFooter from './PanelFooter';
import PanelHeader from './PanelHeader';
import PanelNav from './PanelNav';
import PanelTitle from './PanelTitle';
var Panel = function (_a) {
    var header = _a.header, nav = _a.nav, content = _a.content, footer = _a.footer, headerClass = _a.headerClass, className = _a.className, children = _a.children, rest = tslib_1.__rest(_a, ["header", "nav", "content", "footer", "headerClass", "className", "children"]);
    return (<div className={cx('panel', className)} {...rest}>
      {children ? (children) : (<Fragment>
          {header ? (<PanelHeader className={headerClass}>
              {typeof header === 'string' ? (<PanelTitle>{header}</PanelTitle>) : (header)}
            </PanelHeader>) : null}
          {nav ? <PanelNav>{nav}</PanelNav> : null}
          {content ? <PanelBody>{content}</PanelBody> : null}
          {footer ? <PanelFooter>{footer}</PanelFooter> : null}
        </Fragment>)}
    </div>);
};
Panel.defaultProps = {
    header: null,
    nav: null,
    content: null,
    footer: null,
    headerClass: '',
};
export default Panel;
//# sourceMappingURL=Panel.jsx.map