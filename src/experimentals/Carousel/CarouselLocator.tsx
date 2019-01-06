import React, {SFC} from 'react'

import {CarouselLocatorProps} from './interfaces'

const CarouselLocator: SFC<CarouselLocatorProps> = p => (
  <input
    name="carousel-radio"
    className="carousel-locator"
    type="radio"
    hidden
    {...p}
  />
)

export default CarouselLocator
