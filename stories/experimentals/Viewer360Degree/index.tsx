import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {number, text} from '@storybook/addon-knobs'

import {Viewer360} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

const component = () => {
  return (
    <Viewer360
      image={text('image', 'https://i.loli.net/2018/11/25/5bfa45b4b3f27.jpg')}
      slider={{
        onChange: action('changed'),
        min: number('min', 1),
        max: number('max', 36),
        value: number('value', 1),
      }}
    />
  )
}

export default withLiveEditAndInfo(component, {Viewer360})
