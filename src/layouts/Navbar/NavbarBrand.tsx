import React from 'react'

import cx from 'classnames'

import {NavbarBrandProps} from './interfaces'

const NavbarBrand = ({children, className, href}: NavbarBrandProps) =>
  href ? (
    <a href={href} className={cx('navbar-brand', className)}>
      {children}
    </a>
  ) : (
    <span className={cx('navbar-brand', className)}>{children}</span>
  )

export default NavbarBrand
