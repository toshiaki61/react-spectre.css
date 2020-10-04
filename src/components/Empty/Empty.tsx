import * as React from 'react'

import cx from 'clsx'

import {Icon} from '../../elements/Icon'

import {EmptyProps} from './interfaces'

import EmptyAction from './EmptyAction'
import EmptyIcon from './EmptyIcon'
import EmptySubtitle from './EmptySubtitle'
import EmptyTitle from './EmptyTitle'

const Empty: React.FC<EmptyProps> = p => {
  const {children, className, iconType, title, subtitle, action} = p
  return (
    <div className={cx('empty', className)}>
      {children ? (
        children
      ) : (
        <React.Fragment>
          {iconType ? (
            <EmptyIcon>
              <Icon type={iconType} size={3} />
            </EmptyIcon>
          ) : null}
          {title ? <EmptyTitle className="h5">{title}</EmptyTitle> : null}
          {subtitle ? <EmptySubtitle>{subtitle}</EmptySubtitle> : null}
          {action ? <EmptyAction>{action}</EmptyAction> : null}
        </React.Fragment>
      )}
    </div>
  )
}

export default Empty
