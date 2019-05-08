import * as React from 'react'

import {number} from '@storybook/addon-knobs'

import {Meter} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

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

export default withLiveEditAndInfo(component, {Meter})
