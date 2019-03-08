import React, {FC} from 'react'

import {Icon} from 'elements/Icon'

import {CarouselItemPaging, CarouselItemProps} from './interfaces'

const CarouselItem: FC<CarouselItemProps & CarouselItemPaging> = ({
  src,
  alt,
  prev,
  next,
}) => (
  <figure className="carousel-item">
    <label
      className="item-prev btn btn-action btn-lg"
      htmlFor={`slide-${prev}`}
    >
      <Icon type="arrow-left" />
    </label>
    <label
      className="item-next btn btn-action btn-lg"
      htmlFor={`slide-${next}`}
    >
      <Icon type="arrow-right" />
    </label>
    <img src={src} className="img-responsive rounded" alt={alt} />
  </figure>
)

export default CarouselItem
