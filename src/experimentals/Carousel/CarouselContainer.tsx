import * as React from 'react'

import {CarouselContainerProps} from './interfaces'

const CarouselContainer: React.FC<CarouselContainerProps> = ({children}) => (
  <div className="carousel-container">{children}</div>
)

export default CarouselContainer
