import * as React from 'react'

import cx from 'clsx'

import {ColumnsProps} from './interfaces'

const Columns: React.FC<ColumnsProps> = ({
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
