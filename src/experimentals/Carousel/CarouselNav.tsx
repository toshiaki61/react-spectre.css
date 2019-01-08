import React, {FC} from 'react'

import {CarouselNavProps} from './interfaces'

const CarouselNav: FC<CarouselNavProps> = ({children}) => (
  <div className="carousel-nav">{children}</div>
)

export default CarouselNav
