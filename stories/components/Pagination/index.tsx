import * as React from 'react'

import {number, text} from '@storybook/addon-knobs'

import {Pagination} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

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

export default withLiveEditAndInfo(component, {Pagination})
