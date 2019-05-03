import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Pagination} from '../../../src'

const component = () => {
  return (
    <Pagination
      current={number('current', 1)}
      total={number('total', 10)}
      each={number('each', 3)}
      label={{
        previous: text('previous', 'Previous'),
        next: text('next', 'Next'),
        skip: text('skip', '...'),
      }}
    />
  )
}

export default component
