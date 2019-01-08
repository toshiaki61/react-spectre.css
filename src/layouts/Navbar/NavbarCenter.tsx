import React, {FC} from 'react'

import cx from 'classnames'

import {NavbarCenterProps} from './interfaces'

const NavbarCenter: FC<NavbarCenterProps> = ({children, className}) => (
  <section className={cx('navbar-center', className)}>{children}</section>
)

export default NavbarCenter
