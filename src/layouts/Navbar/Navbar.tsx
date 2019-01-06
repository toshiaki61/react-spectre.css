import React, {SFC} from 'react'

import cx from 'classnames'

import {NavbarProps} from './interfaces'

const Navbar: SFC<NavbarProps> = ({children, className}) => (
  <header className={cx('navbar', className)}>{children}</header>
)

export default Navbar
