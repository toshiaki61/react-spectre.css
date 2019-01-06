import React, {SFC} from 'react'

import {CarouselNavItemProps} from './interfaces'

const CarouselNavItem: SFC<CarouselNavItemProps> = ({children, id}) => (
  <label className="nav-item text-hide c-hand" htmlFor={id}>
    {children}
  </label>
)

export default CarouselNavItem
