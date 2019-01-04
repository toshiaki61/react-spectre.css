import React from 'react'

import cx from 'classnames'

import {NavbarCenterProps} from './interfaces'

const NavbarCenter = ({children, className}: NavbarCenterProps) => (
  <section className={cx('navbar-center', className)}>{children}</section>
)

export default NavbarCenter
