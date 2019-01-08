import React, {FC} from 'react'

import cx from 'classnames'

import {NavbarProps} from './interfaces'

const Navbar: FC<NavbarProps> = ({children, className}) => (
  <header className={cx('navbar', className)}>{children}</header>
)

export default Navbar
