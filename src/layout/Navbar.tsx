import React, {ReactElement} from 'react'
import classnames from 'classnames'
import Container from './Container'
import {acquireContainerProps} from './Columns'

export interface SectionProps {
  children?: ReactElement<any> | ReactElement<any>[]
  className?: string
  center?: boolean
}
const Section = ({
  children,
  className,
  center,
  ...props
}: SectionProps): ReactElement<SectionProps> => {
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
export interface NavbarWithoutContainerProps {
  children: ReactElement<any> | ReactElement<any>[]
  className?: string
}
const NavbarWithoutContainer = ({
  children,
  className,
  ...props
}: NavbarWithoutContainerProps): ReactElement<NavbarWithoutContainerProps> => {
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
export interface NavbarProps {
  children: ReactElement<any> | ReactElement<any>[]
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
}: NavbarProps): ReactElement<NavbarProps> => {
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
export interface BrandProps {
  children: ReactElement<any>
  className?: string
  href?: string
}
const Brand = ({
  children,
  className,
  ...props
}: BrandProps): ReactElement<BrandProps> => {
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
