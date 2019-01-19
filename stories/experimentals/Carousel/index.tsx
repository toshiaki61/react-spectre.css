import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Carousel} from '../../../src'

{
  /* <div class="carousel">
  <!-- carousel locator -->
  <input class="carousel-locator" id="slide-1" type="radio" name="carousel-radio" hidden="" checked="">
  <input class="carousel-locator" id="slide-2" type="radio" name="carousel-radio" hidden="">
  <input class="carousel-locator" id="slide-3" type="radio" name="carousel-radio" hidden="">
  <input class="carousel-locator" id="slide-4" type="radio" name="carousel-radio" hidden="">
  
  <!-- carousel container -->
  <div class="carousel-container">
    <!-- carousel item -->
    <figure class="carousel-item">
      <label class="item-prev btn btn-action btn-lg" for="slide-4"><i class="icon icon-arrow-left"></i></label>
      <label class="item-next btn btn-action btn-lg" for="slide-2"><i class="icon icon-arrow-right"></i></label>
      <img class="img-responsive rounded" src="img/osx-yosemite.jpg" alt="macOS Yosemite Wallpaper">
    </figure>
    <figure class="carousel-item">
      <label class="item-prev btn btn-action btn-lg" for="slide-1"><i class="icon icon-arrow-left"></i></label>
      <label class="item-next btn btn-action btn-lg" for="slide-3"><i class="icon icon-arrow-right"></i></label>
      <img class="img-responsive rounded" src="img/osx-yosemite-2.jpg" alt="macOS Yosemite Wallpaper">
    </figure>
    <figure class="carousel-item">
      <label class="item-prev btn btn-action btn-lg" for="slide-2"><i class="icon icon-arrow-left"></i></label>
      <label class="item-next btn btn-action btn-lg" for="slide-4"><i class="icon icon-arrow-right"></i></label>
      <img class="img-responsive rounded" src="img/osx-el-capitan.jpg" alt="macOS El Capitan Wallpaper">
    </figure>
    <figure class="carousel-item">
      <label class="item-prev btn btn-action btn-lg" for="slide-3"><i class="icon icon-arrow-left"></i></label>
      <label class="item-next btn btn-action btn-lg" for="slide-1"><i class="icon icon-arrow-right"></i></label>
      <img class="img-responsive rounded" src="img/osx-el-capitan-2.jpg" alt="macOS El Capitan Wallpaper">
    </figure>
  </div>
  <!-- carousel navigation -->
  <div class="carousel-nav">
    <label class="nav-item text-hide c-hand" for="slide-1">1</label>
    <label class="nav-item text-hide c-hand" for="slide-2">2</label>
    <label class="nav-item text-hide c-hand" for="slide-3">3</label>
    <label class="nav-item text-hide c-hand" for="slide-4">4</label>
  </div>
</div> */
}
const component = () => {
  return (
    <Carousel
      activeId={text('activeId', '')}
      slides={[
        {src: '/img/osx-yosemite.jpg', alt: 'macOS Yosemite Wallpaper'},
        {src: '/img/osx-yosemite-2.jpg', alt: 'macOS Yosemite Wallpaper'},
        {src: '/img/osx-el-capitan.jpg', alt: 'macOS El Capitan Wallpaper'},
        {src: '/img/osx-el-capitan-2.jpg', alt: 'macOS El Capitan Wallpaper'},
      ]}
      onChange={action('chenged')}
    />
  )
}

export default component
