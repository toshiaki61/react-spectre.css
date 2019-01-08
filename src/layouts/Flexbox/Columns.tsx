import React, {FC} from 'react'

import cx from 'classnames'

import {ColumnsProps} from './interfaces'

const Columns: FC<ColumnsProps> = ({
  children,
  className,
  gapless,
  oneline,
  ...rest
}) => (
  <div
    className={cx('columns', className, {
      'col-gapless': gapless,
      'col-oneline': oneline,
    })}
    {...rest}
  >
    {children}
  </div>
)

export default Columns
