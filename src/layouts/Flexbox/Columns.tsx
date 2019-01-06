import React, {SFC} from 'react'

import cx from 'classnames'

import {ColumnsProps} from './interfaces'

const Columns: SFC<ColumnsProps> = ({
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
