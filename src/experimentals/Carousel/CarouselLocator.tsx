import * as React from 'react'

import {CarouselLocatorProps} from './interfaces'

const CarouselLocator: React.FC<CarouselLocatorProps> = p => (
  <input
    name="carousel-radio"
    className="carousel-locator"
    type="radio"
    hidden
    {...p}
  />
)

export default CarouselLocator
