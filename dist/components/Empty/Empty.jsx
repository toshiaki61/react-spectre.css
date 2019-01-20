import React, { Fragment } from 'react';
import cx from 'classnames';
import { Icon } from '@elements/Icon';
import EmptyAction from './EmptyAction';
import EmptyIcon from './EmptyIcon';
import EmptySubtitle from './EmptySubtitle';
import EmptyTitle from './EmptyTitle';
var Empty = function (p) {
    var children = p.children, className = p.className, iconType = p.iconType, title = p.title, subtitle = p.subtitle, action = p.action;
    return (<div className={cx('empty', className)}>
      {children ? (children) : (<Fragment>
          {iconType ? (<EmptyIcon>
              <Icon type={iconType} size={3}/>
            </EmptyIcon>) : null}
          {title ? <EmptyTitle className="h5">{title}</EmptyTitle> : null}
          {subtitle ? <EmptySubtitle>{subtitle}</EmptySubtitle> : null}
          {action ? <EmptyAction>{action}</EmptyAction> : null}
        </Fragment>)}
    </div>);
};
export default Empty;
//# sourceMappingURL=Empty.jsx.map