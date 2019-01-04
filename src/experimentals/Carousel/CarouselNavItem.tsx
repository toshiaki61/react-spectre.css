import React from 'react'

import {CarouselNavItemProps} from './interfaces'

const CarouselNavItem = ({children, id}: CarouselNavItemProps) => (
  <label className="nav-item text-hide c-hand" htmlFor={id}>
    {children}
  </label>
)

export default CarouselNavItem
