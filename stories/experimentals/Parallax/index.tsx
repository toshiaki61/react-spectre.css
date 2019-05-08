import * as React from 'react'

import {text} from '@storybook/addon-knobs'

import {Parallax} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

const component = () => {
  return (
    <Parallax
      src={text('src', '/img/osx-yosemite-2.jpg')}
      alt={text('alt', 'macOS Yosemite Wallpaper')}
      title={text('title', 'tvOS parallax demo')}
    />
  )
}

export default withLiveEditAndInfo(component, {Parallax})
