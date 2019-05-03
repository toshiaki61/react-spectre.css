import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'
import {ComparisonSlider} from '../../../src'

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
