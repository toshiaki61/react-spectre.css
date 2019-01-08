import React, {FC} from 'react'

import cx from 'classnames'

import {NavbarSectionProps} from './interfaces'

const NavbarSection: FC<NavbarSectionProps> = ({children, className}) => (
  <section className={cx('navbar-section', className)}>{children}</section>
)

export default NavbarSection
