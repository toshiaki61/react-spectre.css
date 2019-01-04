import React from 'react'

import cx from 'classnames'

import {ColumnsProps} from './interfaces'

const Columns = ({
  children,
  className,
  gapless,
  oneline,
  ...rest
}: ColumnsProps) => (
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
