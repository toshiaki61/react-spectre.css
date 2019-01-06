import React, {ChangeEvent, Fragment, SFC, useCallback} from 'react'

import {CarouselProps} from './interfaces'
import {hasCarouselChildren} from './util'

import CarouselContainer from './CarouselContainer'
import CarouselItem from './CarouselItem'
import CarouselLocator from './CarouselLocator'
import CarouselNav from './CarouselNav'
import CarouselNavItem from './CarouselNavItem'

function renderCarousel(p: CarouselProps) {
  if (hasCarouselChildren(p)) {
    return p.children
  }
  const {slides, active, onChange} = p
  return (
    <Fragment>
      {slides.map((slide, i) => {
        const id = `slide-${i}`
        const handleChange =
          // useCallback(
          (e: ChangeEvent<any>) => onChange(e, id)
        // ,[id])
        return (
          <CarouselLocator
            key={`${id}_locator`}
            id={id}
            checked={id === active}
            onChange={handleChange}
          />
        )
      })}
      <CarouselContainer>
        {slides.map((slide, i) => (
          <CarouselItem
            key={`slide-${i}_item`}
            prev={i === 0 ? slides.length - 1 : i - 1}
            next={i === slides.length - 1 ? 0 : i + 1}
            {...slide}
          />
        ))}
      </CarouselContainer>
      <CarouselNav>
        {slides.map((slide, i) => {
          const id = `slide-${i}`
          return (
            <CarouselNavItem key={`${id}_nav`} id={id}>
              {i + 1}
            </CarouselNavItem>
          )
        })}
      </CarouselNav>
      }
    </Fragment>
  )
}
const Carousel: SFC<CarouselProps> = p => (
  <div className="carousel">{renderCarousel(p)}</div>
)
Carousel.defaultProps = {
  active: 'slide-0',
}

export default Carousel
