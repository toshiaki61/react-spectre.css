import React from 'react'

import cx from 'classnames'

import {NavbarSectionProps} from './interfaces'

const NavbarSection = ({children, className}: NavbarSectionProps) => (
  <section className={cx('navbar-section', className)}>{children}</section>
)

export default NavbarSection
