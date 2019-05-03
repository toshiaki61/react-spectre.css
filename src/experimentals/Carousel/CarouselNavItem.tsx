import * as React from 'react'

import {CarouselNavItemProps} from './interfaces'

const CarouselNavItem: React.FC<CarouselNavItemProps> = ({children, id}) => (
  <label className="nav-item text-hide c-hand" htmlFor={id}>
    {children}
  </label>
)

export default CarouselNavItem
