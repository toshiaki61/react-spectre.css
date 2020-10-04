import * as React from 'react'

import cx from 'clsx'

import {ColumnProps} from './interfaces'

const Column: React.FC<ColumnProps> = ({
  children,
  className,
  xs,
  sm,
  md,
  lg,
  xl,
  size,
  offset,
  autoWidth,
  autoWidthXl,
  autoWidthLg,
  autoWidthMd,
  autoWidthSm,
  autoWidthXs,
  ...props
}) => (
  <div
    className={cx(
      'column',
      {
        [`col-xs-${xs}`]: xs,
        [`col-sm-${sm}`]: sm,
        [`col-md-${md}`]: md,
        [`col-lg-${lg}`]: lg,
        [`col-xl-${xl}`]: xl,
        [`col-${size}`]: size,
        [`col-${offset}-auto`]: offset,
        'col-auto': autoWidth,
        'col-xl-auto': autoWidthXl,
        'col-lg-auto': autoWidthLg,
        'col-md-auto': autoWidthMd,
        'col-sm-auto': autoWidthSm,
        'col-xs-auto': autoWidthXs,
      },
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export default Column
