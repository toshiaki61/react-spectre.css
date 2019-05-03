import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Progress} from '../../../src'

const component = () => {
  return <Progress max={number('max', 100)} value={number('value', 0)} />
}

export default component
