import classnames from 'classnames'
import React, {ReactElement, ReactNode, ReactNodeArray} from 'react'
import {acquireContainerProps} from './Columns'
import Container from './Container'

export interface ISectionProps {
  children?: ReactNode | ReactNodeArray
  className?: string
  center?: boolean
}
const Section = ({
  children,
  className,
  center,
  ...props
}: ISectionProps): ReactElement<ISectionProps> => {
  const classes = classnames(
    {
      'navbar-section': !center,
      'navbar-center': center,
    },
    className
  )
  return (
    <section className={classes} {...props}>
      {children}
    </section>
  )
}
Section.defaultProps = {
  children: null,
  className: '',
  center: false,
}
export interface INavbarWithoutContainerProps {
  children: ReactNode | ReactNodeArray
  className?: string
}
const NavbarWithoutContainer = ({
  children,
  className,
  ...props
}: INavbarWithoutContainerProps): ReactElement<
  INavbarWithoutContainerProps
> => {
  const classes = classnames('navbar', className)
  return (
    <header className={classes} {...props}>
      {children}
    </header>
  )
}
NavbarWithoutContainer.defaultProps = {
  className: '',
}
export interface INavbarProps {
  children: ReactNode | ReactNodeArray
  container?:
    | boolean
    | string
    | {
        className?: string
        xs?: boolean
        sm?: boolean
        md?: boolean
        lg?: boolean
        xl?: boolean
      }
}
const Navbar = ({
  children,
  container,
  ...props
}: INavbarProps): ReactElement<INavbarProps> => {
  const content = (
    <NavbarWithoutContainer {...props}>{children}</NavbarWithoutContainer>
  )
  if (!container) {
    return content
  }
  const containerProps = acquireContainerProps(container)
  return <Container {...containerProps}>{content}</Container>
}
Navbar.defaultProps = {
  container: false,
}
export interface IBrandProps {
  children: ReactElement<any>
  className?: string
  href?: string
}
const Brand = ({
  children,
  className,
  ...props
}: IBrandProps): ReactElement<IBrandProps> => {
  const classes = classnames('navbar-brand', className)
  let component = null
  if (props.href) {
    component = (
      <a className={classes} {...props}>
        {children}
      </a>
    )
  } else {
    component = (
      <span className={classes} {...props}>
        {children}
      </span>
    )
  }
  return component
}
Brand.defaultProps = {
  className: '',
  href: '',
}
Navbar.Brand = Brand
Navbar.Section = Section
export default Navbar
