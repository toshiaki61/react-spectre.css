import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Carousel} from '../../../src'

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
