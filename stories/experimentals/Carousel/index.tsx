import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {text} from '@storybook/addon-knobs'

import {Carousel} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

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

export default withLiveEditAndInfo(component, {Carousel})
