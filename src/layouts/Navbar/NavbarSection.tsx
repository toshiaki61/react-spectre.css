import * as React from 'react'

import cx from 'clsx'

import {NavbarSectionProps} from './interfaces'

const NavbarSection: React.FC<NavbarSectionProps> = ({children, className}) => (
  <section className={cx('navbar-section', className)}>{children}</section>
)

export default NavbarSection
