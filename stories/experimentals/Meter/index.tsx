import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Meter} from '../../../src'

const component = () => {
  return (
    <Meter
      value={number('value', 0)}
      optimum={number('optimum', 0)}
      min={number('min', 0)}
      max={number('max', 100)}
      low={number('low', 20)}
      high={number('high', 60)}
    />
  )
}

export default component
