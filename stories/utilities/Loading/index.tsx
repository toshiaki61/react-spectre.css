import * as React from 'react'

import {boolean, object, text} from '@storybook/addon-knobs'

import {Loading} from '../../../src/'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

const component = () => {
  return (
    <Loading
      large={boolean('large', false)}
      className={text('className', '')}
      style={object('style', {})}
    />
  )
}

export default withLiveEditAndInfo(component, {Loading})
