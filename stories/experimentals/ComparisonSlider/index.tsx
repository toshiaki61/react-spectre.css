import * as React from 'react'

import {ComparisonSlider} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

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

export default withLiveEditAndInfo(component, {ComparisonSlider})
