import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Loading, LoadingProps} from '../../../src/'

const component = () => {
  return (
    <Loading
      large={boolean('large', false)}
      className={text('className', '')}
      style={object('style', {})}
    />
  )
}

export default component
