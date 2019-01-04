import React from 'react'

import cx from 'classnames'

import {NavbarProps} from './interfaces'

const Navbar = ({children, className}: NavbarProps) => (
  <header className={cx('navbar', className)}>{children}</header>
)

export default Navbar
