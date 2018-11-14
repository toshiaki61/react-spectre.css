import classnames from 'classnames'
import React, {ReactElement} from 'react'

export interface IContainerProps {
  children: ReactElement<any>
  className?: string
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
}
const Container = ({
  children,
  className,
  xs,
  sm,
  md,
  lg,
  xl,
  ...props
}: IContainerProps): ReactElement<IContainerProps> => {
  const classes = classnames(
    'container',
    {
      xs,
      sm,
      md,
      lg,
      xl,
    },
    className
  )
  return (
    <section className={classes} {...props}>
      {children}
    </section>
  )
}
Container.defaultProps = {
  className: '',
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
}
export default Container
