import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Divider, DividerProps} from '../../../src/'

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

export default component
