
import React from 'react';
import noop from 'lodash.noop';

import Icon from '../elements/Icon';










var Carousel = function Carousel(_ref) {var slides = _ref.slides,active = _ref.active,onChange = _ref.onChange;
  if (!slides || slides.length === 0) {
    return null;
  }
  return (
    React.createElement('div', { className: 'carousel' },
      slides.map(function (slide, i) {
        var id = 'slide-' + i;
        return (
          React.createElement('input', {
            key: id + '_locator',
            id: id,
            name: 'carousel-radio',
            className: 'carousel-locator',
            checked: id === active,
            type: 'radio',
            hidden: true,
            onChange: function (_onChange) {function onChange(_x) {return _onChange.apply(this, arguments);}onChange.toString = function () {return _onChange.toString();};return onChange;}(function (e) {return onChange(e, id);}) }));


      }),
      React.createElement('div', { className: 'carousel-container' },
        slides.map(function (slide, i) {
          var key = 'slide-' + i + '_item';
          var prev = i === 0 ? slides.length - 1 : i - 1;
          var next = i === slides.length - 1 ? 0 : i + 1;
          return (
            React.createElement('figure', { key: key, className: 'carousel-item' },
              React.createElement('label', { className: 'item-prev btn btn-action btn-lg', htmlFor: 'slide-' + prev },
                React.createElement(Icon, { arrowLeft: true })),

              React.createElement('label', { className: 'item-next btn btn-action btn-lg', htmlFor: 'slide-' + next },
                React.createElement(Icon, { arrowRight: true })),

              React.createElement('img', { src: slide.src, className: 'img-responsive rounded', alt: slide.alt })));


        })),

      React.createElement('div', { className: 'carousel-nav' },
        slides.map(function (slide, i) {
          var id = 'slide-' + i;
          return (
            React.createElement('label', { key: id + '_nav', className: 'nav-item text-hide c-hand', htmlFor: id }, i + 1));

        }))));



};
Carousel.defaultProps = {
  slides: [],
  active: 'slide-0',
  onChange: noop };


export default Carousel;