import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Parallax} from '../../../src'

const component = () => {
  return (
    <Parallax
      src={text('src', '/img/osx-yosemite-2.jpg')}
      alt={text('alt', 'macOS Yosemite Wallpaper')}
      title={text('title', 'tvOS parallax demo')}
    />
  )
}

export default component
