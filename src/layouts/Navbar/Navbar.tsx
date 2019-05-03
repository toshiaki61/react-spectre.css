import * as React from 'react'

import cx from 'clsx'

import {NavbarProps} from './interfaces'

const Navbar: React.FC<NavbarProps> = ({children, className}) => (
  <header className={cx('navbar', className)}>{children}</header>
)

export default Navbar
