import * as React from 'react'

import cx from 'clsx'

import {NavbarCenterProps} from './interfaces'

const NavbarCenter: React.FC<NavbarCenterProps> = ({children, className}) => (
  <section className={cx('navbar-center', className)}>{children}</section>
)

export default NavbarCenter
