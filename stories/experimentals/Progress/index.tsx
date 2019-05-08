import * as React from 'react'

import {number} from '@storybook/addon-knobs'

import {Progress} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

const component = () => {
  return <Progress max={number('max', 100)} value={number('value', 0)} />
}

export default withLiveEditAndInfo(component, {Progress})
