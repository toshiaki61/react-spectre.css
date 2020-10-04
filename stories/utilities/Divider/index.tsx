import * as React from 'react'

import {boolean, object, text} from '@storybook/addon-knobs'

import {Divider} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

const component = () => {
  return (
    <Divider
      content={text('content', '')}
      vertical={boolean('vertical', false)}
      li={boolean('li', false)}
      center={boolean('center', false)}
      className={text('className', '')}
      style={object('style', {height: '100px'})}
    />
  )
}

export default withLiveEditAndInfo(component, {Divider})
