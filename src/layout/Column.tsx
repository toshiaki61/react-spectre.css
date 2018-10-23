import React, {ReactElement} from 'react'
import classnames from 'classnames'

export interface ColumnProps {
  children: ReactElement<any>
  className?: string
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  size?: number
}
const Column = ({
  children,
  className,
  xs,
  sm,
  md,
  lg,
  xl,
  size,
  ...props
}: ColumnProps): ReactElement<ColumnProps> => {
  const classes = classnames(
    'column',
    {
      [`col-xs-${xs || 0}`]: !!xs,
      [`col-sm-${sm || 0}`]: !!sm,
      [`col-md-${md || 0}`]: !!md,
      [`col-lg-${lg || 0}`]: !!lg,
      [`col-xl-${xl || 0}`]: !!xl,
      [`col-${size || 0}`]: !!size,
    },
    className
  )
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
Column.defaultProps = {
  className: '',
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
  size: 0,
}
export default Column
