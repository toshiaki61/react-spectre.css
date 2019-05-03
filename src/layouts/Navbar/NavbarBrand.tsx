import * as React from 'react'

import cx from 'clsx'

import {NavbarBrandProps} from './interfaces'

const NavbarBrand: React.FC<NavbarBrandProps> = ({children, className, href}) =>
  href ? (
    <a href={href} className={cx('navbar-brand', className)}>
      {children}
    </a>
  ) : (
    <span className={cx('navbar-brand', className)}>{children}</span>
  )

export default NavbarBrand
