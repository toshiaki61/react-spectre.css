import React, {SFC} from 'react'

import cx from 'classnames'

import {NavbarSectionProps} from './interfaces'

const NavbarSection: SFC<NavbarSectionProps> = ({children, className}) => (
  <section className={cx('navbar-section', className)}>{children}</section>
)

export default NavbarSection
