import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Slider} from '../../../src'

const component = () => {
  return (
    <Slider
      min={number('min', 0)}
      max={number('max', 100)}
      value={number('value', 0)}
      tooltip={boolean('tooltip', true)}
      onChange={action('changed')}
    />
  )
}

export default component
