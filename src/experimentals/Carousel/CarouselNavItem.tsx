import React, {FC} from 'react'

import {CarouselNavItemProps} from './interfaces'

const CarouselNavItem: FC<CarouselNavItemProps> = ({children, id}) => (
  <label className="nav-item text-hide c-hand" htmlFor={id}>
    {children}
  </label>
)

export default CarouselNavItem
