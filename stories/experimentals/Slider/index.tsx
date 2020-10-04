import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number} from '@storybook/addon-knobs'

import {Slider} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

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

export default withLiveEditAndInfo(component, {Slider})
