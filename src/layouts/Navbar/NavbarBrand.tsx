import React, {FC} from 'react'

import cx from 'classnames'

import {NavbarBrandProps} from './interfaces'

const NavbarBrand: FC<NavbarBrandProps> = ({children, className, href}) =>
  href ? (
    <a href={href} className={cx('navbar-brand', className)}>
      {children}
    </a>
  ) : (
    <span className={cx('navbar-brand', className)}>{children}</span>
  )

export default NavbarBrand
