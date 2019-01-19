import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'
import {ComparisonSlider} from '../../../src'

{
  /* <div class="comparison-slider">
  <figure class="comparison-before"><img class="rounded" src="../img/macos-sierra-2.jpg" alt="macOS Sierra Wallpaper">
    <div class="comparison-label">Before</div>
  </figure>
  <figure class="comparison-after"><img class="filter-grayscale rounded" src="../img/macos-sierra-2.jpg" alt="macOS Sierra Wallpaper">
    <div class="comparison-label">After</div>
    <textarea class="comparison-resizer" readonly="" style="margin-left: 0px; margin-right: 0px; width: 16px;"></textarea>
  </figure>
</div> */
}
const component = () => {
  return (
    <ComparisonSlider
      style={{height: 'auto'}}
      before={{src: '/img/macos-sierra-2.jpg', alt: 'macOS Sierra Wallpaper'}}
      after={{
        src: '/img/macos-sierra-2.jpg',
        alt: 'macOS Sierra Wallpaper',
        style: {
          filter: 'grayscale(75%)',
        },
      }}
    />
  )
}

export default component
