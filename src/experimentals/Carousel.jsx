/* @flow */
import React from 'react';
import noop from 'noop';

import Icon from '../elements/Icon';

export type ItemProps = {
  src: string,
  alt: string,
};
export type CarouselProps = {
  slides: Array<ItemProps>,
  active?: string,
  onChange: (e: Event, id: string) => void,
}
const Carousel = ({ slides, active, onChange }: CarouselProps) => {
  if (!slides || slides.length === 0) {
    return null;
  }
  return (
    <div className="carousel">
      {slides.map((slide, i) => {
        const id = `slide-${i}`;
        return (
          <input
            key={`${id}_locator`}
            id={id}
            name="carousel-radio"
            className="carousel-locator"
            checked={id === active}
            type="radio"
            hidden
            onChange={e => onChange(e, id)}
          />
        );
      })}
      <div className="carousel-container">
        {slides.map((slide, i) => {
          const key = `slide-${i}_item`;
          const prev = i === 0 ? slides.length - 1 : i - 1;
          const next = i === slides.length - 1 ? 0 : i + 1;
          return (
            <figure key={key} className="carousel-item">
              <label className="item-prev btn btn-action btn-lg" htmlFor={`slide-${prev}`}>
                <Icon arrowLeft />
              </label>
              <label className="item-next btn btn-action btn-lg" htmlFor={`slide-${next}`}>
                <Icon arrowRight />
              </label>
              <img src={slide.src} className="img-responsive rounded" alt={slide.alt} />
            </figure>
          );
        })}
      </div>
      <div className="carousel-nav">
        {slides.map((slide, i) => {
          const id = `slide-${i}`;
          return (
            <label key={`${id}_nav`} className="nav-item text-hide c-hand" htmlFor={id}>{i + 1}</label>
          );
        })}
      </div>
    </div>
  );
};
Carousel.defaultProps = {
  slides: [],
  active: 'slide-0',
  onChange: noop,
};

export default Carousel;
