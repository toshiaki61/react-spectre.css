import React, {ReactElement} from 'react'

import cx from 'classnames'

export interface ContainerProps {
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
}: ContainerProps): ReactElement<ContainerProps> => {
  const classes = cx(
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
