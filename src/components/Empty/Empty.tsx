import React, {Fragment, ReactElement} from 'react'

import cx from 'classnames'

import {Icon} from '@elements/Icon'

import {EmptyProps} from './interfaces'

import EmptyAction from './EmptyAction'
import EmptyIcon from './EmptyIcon'
import EmptySubtitle from './EmptySubtitle'
import EmptyTitle from './EmptyTitle'

const Empty = ({
  children,
  className,
  iconType,
  title,
  subtitle,
  action,
}: EmptyProps): ReactElement<EmptyProps> => {
  return (
    <div className={cx('empty', className)}>
      {children ? (
        children
      ) : (
        <Fragment>
          {iconType ? (
            <EmptyIcon>
              <Icon type={iconType} size={3} />
            </EmptyIcon>
          ) : null}
          {title ? <EmptyTitle className="h5">{title}</EmptyTitle> : null}
          {subtitle ? <EmptySubtitle>{subtitle}</EmptySubtitle> : null}
          {action ? <EmptyAction>{action}</EmptyAction> : null}
        </Fragment>
      )}
    </div>
  )
}
Empty.defaultProps = {
  children: null,
  className: '',
  icon: '',
  title: null,
  subtitle: null,
}

export default Empty
